import { User } from "@prisma/client";
import { TransactionRespose, CreateTransactionRequest, toTransactionResponse } from "../model/transaction_model";
import { Validation } from '../validation/validation';
import { TransactionValidation } from '../validation/transaction-validation';
import { ResponseError } from '../error/response.error';
import { ShoppingCartService } from './shopping-cart-service';
import { prismaClient } from '../application/database';
import { v4 as uuidv4 } from 'uuid';
import "dotenv/config";

export class TransactionService {
    static async createTransaction(user: User, request: CreateTransactionRequest): Promise<TransactionRespose> {
        const createTransactionRequest = Validation.validate(TransactionValidation.CREATE, request);
        const productsFromShoppingCartItem = await ShoppingCartService.get(user);

        if (productsFromShoppingCartItem.length == 0) {
           throw new ResponseError(400, "Shopping cart is empty");
        }
      
        const total = productsFromShoppingCartItem.reduce((total, product) => total + product.product.price * product.quantity, 0);

        const transaction_id = `TRX-${uuidv4()}`;
        const authString = btoa(`${process.env.MIDTRANS_SERVER_KEY}`)
        
        const payload = {
            transaction_details: {
                order_id: transaction_id,
                gross_amount: total
            },
            item_details: productsFromShoppingCartItem.map((product) => ({
                id: product.product.id,
                price: product.product.price,
                quantity: product.quantity,
                name: product.product.product_name
            })),
            customer_details: {
                first_name: user.username,
                email: user.email
            },
            callbacks: {
                finish: `${process.env.MIDTRANS_SERVER_KEY}/order-status?transaction_id=${transaction_id}`,
                error: `${process.env.MIDTRANS_SERVER_KEY}/order-status?transaction_id=${transaction_id}`,
                pending: `${process.env.MIDTRANS_SERVER_KEY}/order-status?transaction_id=${transaction_id}`
            }
        }

        const response = await fetch(`${process.env.MIDTRANS_APP_URL}/snap/v1/transactions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Basic ${authString}`
            },
            body: JSON.stringify(payload)
        })

        const data = await response.json();

        if (response.status !== 201) {
            throw new ResponseError(500, 'Failed to create transaction');
        }

        const transaction = await prismaClient.transaction.create({
            data: {
                total,
                status: "PENDING_PAYMENT",
                customer_name: user.username!,
                customer_email: user.email,
                snap_token: data.token,
                snap_redirect_url: data.redirect_url,
                user: { connect: { email: user.email } },
            }
        });

        const transactionItems = await Promise.all(
            productsFromShoppingCartItem.map(async (product) => {
                return await prismaClient.transactionsItem.create({
                    data: {
                       product_name: product.product.product_name,
                       quantity: product.quantity,
                       price: product.product.price,
                       productId: product.product.id,
                       transactionId: transaction.id,
                   }
                })
            })
        );

        await ShoppingCartService.deleteAll(user);
       
        return toTransactionResponse(transaction, transactionItems, user);
    }
}
