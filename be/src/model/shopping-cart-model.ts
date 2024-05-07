    import { Product, ShoppingCart, ShoppingCartItem } from "@prisma/client";

    export type ShoppingCartResponse = {
        quantity: number;
        total: number;
        user_email: string;
        shoppingCartItem: {
            quantity: number;
            total: number;
            product_id: number;
            user_email: string;
            shoppingCartId: number;
        }
    }

    export type ShoppingCartItemResponse = {
        quantity: number;
        total: number;
        shoppingCartId: number;
        user_email: string;
        productId: number;
        product: {
            id: number;
            product_name: string;
            stock: number;
            price: number;
            size: string[];
            image: string[];
            color: string[];
            description: string;
            rating: number;
            category_id: number;
        }
    } 

    export type CreateShoppingCartRequest = {
        quantity: number;
        total: number;
        product_id: number;
        user_email: string;
    }

    export function toShoppingCartResponse(shoppingCart: ShoppingCart & { product_id: number, user_email: string, shoppingCartId: number }): ShoppingCartResponse {
        return {
            quantity: shoppingCart.quantity,
            total: shoppingCart.total,
            user_email: shoppingCart.user_email,
            shoppingCartItem: {
                quantity: shoppingCart.quantity,
                total: shoppingCart.total,
                product_id: shoppingCart.product_id,
                user_email: shoppingCart.user_email,
                shoppingCartId: shoppingCart.shoppingCartId
            }
        };  
    }

    export function toShoppingCartItemResponse(
        shoppingCartItem: ShoppingCartItem,
        product: Product,
        shoppingCartId: number,
        userEmail: string
    ): ShoppingCartItemResponse {
        return {
            quantity: shoppingCartItem.quantity,
            total: shoppingCartItem.total,
            shoppingCartId: shoppingCartId,
            user_email: userEmail,
            productId: product.id,
            product: {
                id: product.id,
                product_name: product.product_name,
                stock: product.stock,
                price: product.price,
                size: product.size,
                image: product.image,
                color: product.color,
                description: product.description,
                rating: product.rating,
                category_id: product.category_id
            }
        };
    }
    
    
    


