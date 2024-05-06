import { User } from "@prisma/client";
import { TransactionRespose, CreateTransactionRequest, toTransactionResponse } from "../model/transaction_model";
import { Validation } from '../validation/validation';
import { TransactionValidation } from '../validation/transaction-validation';
import { ResponseError } from '../error/response.error';
import { ShoppingCartService } from './shopping-cart-service';
import { prismaClient } from '../application/database';

export class TransactionService {
    static async createTransaction(user: User, request: CreateTransactionRequest): Promise<TransactionRespose> {
        const createTransactionRequest = Validation.validate(TransactionValidation.CREATE, request);
        console.log(user)
        const productsFromShoppingCartItem = await ShoppingCartService.get(user);

        if (productsFromShoppingCartItem.length == 0) {
           throw new ResponseError(400, "Shopping cart is empty");
        }
      
        const total = productsFromShoppingCartItem.reduce((total, product) => total + product.product.price * product.quantity, 0);
        const transaction = await prismaClient.transaction.create({
            data: {
                total,
                status: "PENDING_PAYMENT",
                customer_name: user.username!,
                customer_email: user.email,
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
