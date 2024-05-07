import { User } from "@prisma/client";
import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response.error";
import { CreateShoppingCartRequest, ShoppingCartItemResponse, ShoppingCartResponse, toShoppingCartItemResponse, toShoppingCartResponse } from "../model/shopping-cart-model";
import { Validation } from "../validation/validation";
import { ShoppingCartValidation } from "../validation/shopping-cart-validation";

export class ShoppingCartService {
    static async addToCart(user: User, request: CreateShoppingCartRequest): Promise<ShoppingCartResponse> {
        const addToCartRequest = Validation.validate(ShoppingCartValidation.ADD_TO_CART, request);

        let shoppingCart = await prismaClient.shoppingCart.findUnique({
            where: {
              user_email: user.email,
            },
        });
    
        if (!shoppingCart) {
            shoppingCart = await prismaClient.shoppingCart.create({
              data: {
                user: {
                  connect: {
                    email: user.email,
                  },
                },
                quantity: 0,
                total: 0,
              },
            });
        }

        const product = await prismaClient.product.findUnique({
            where: {
                id: addToCartRequest.product_id,
            },
        });
          
        if (!product) {
            throw new Error('Product not found');
        }

        const existingItem = await prismaClient.shoppingCartItem.findFirst({
            where: {
              productId: product.id,
              shoppingCartId: shoppingCart.id,
            },
        });

        if (existingItem) {
            await prismaClient.shoppingCartItem.update({
              where: {
                productId_shoppingCartId: {
                  productId: product.id,
                  shoppingCartId: shoppingCart.id,
                },
              },
              data: {
                quantity: {
                  increment: addToCartRequest.quantity,
                },
                total: {
                  increment: product.price * addToCartRequest.quantity,
                },
              },
            });
          } else {
            await prismaClient.shoppingCartItem.create({
              data: {
                quantity: addToCartRequest.quantity,
                total: product.price * addToCartRequest.quantity,
                product: {
                  connect: { id: product.id },
                },
                shoppingCart: {
                  connect: { id: shoppingCart.id },
                },
              },
            });
          }
      
          await prismaClient.shoppingCart.update({
            where: {
              id: shoppingCart.id,
            },
            data: {
              quantity: {
                increment: addToCartRequest.quantity,
              },
              total: {
                increment: product.price * addToCartRequest.quantity,
              },
            },
          });

        const shoppingCartWithDetails = { 
            ...shoppingCart,
            product_id: addToCartRequest.product_id,
            user_email: user.email, 
            shoppingCartId: shoppingCart.id 
        };

        return toShoppingCartResponse(shoppingCartWithDetails);
    }
    
    static async get(user: User): Promise<Array<ShoppingCartItemResponse>> {
        const shoppingCarts = await prismaClient.shoppingCartItem.findMany({
            where: {
                shoppingCart: {
                    user_email: user.email
                }
            },
            include: {
                product: true
            }
        });

        const responses = shoppingCarts.map(shoppingCart => toShoppingCartItemResponse(
          shoppingCart,
          shoppingCart.product,
          shoppingCart.shoppingCartId,
          user.email
      ));      
      
      return responses
    }

    static async deleteAll(user: User): Promise<void> {
      const shoppingCartItems = await prismaClient.shoppingCartItem.findMany({
        where: {
          shoppingCart: {
            user_email: user.email
              }
          }
      });

      await Promise.all(shoppingCartItems.map(async (item) => {
        await prismaClient.shoppingCartItem.delete({
          where: {
            productId_shoppingCartId: {
              productId: item.productId,
              shoppingCartId: item.shoppingCartId
            }
          }
        })
      }))
    }
}
