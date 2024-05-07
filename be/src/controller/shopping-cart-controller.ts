import { Request, Response, NextFunction } from "express";
import { ShoppingCartService } from "../service/shopping-cart-service";
import { UserRequest } from "../type/user-request";
import { CreateShoppingCartRequest } from "../model/shopping-cart-model";

export class ShoppingCartController {
    static async addToCart(req: UserRequest, res: Response, next: NextFunction): Promise<void> {
        try {
            const request: CreateShoppingCartRequest = req.body as CreateShoppingCartRequest;
            
            const response = await ShoppingCartService.addToCart(req.user!, request);
            res.status(200).json({
                data: response
            })
        } catch (e) {
            next(e);
        }
    }

    static async get (req: UserRequest, res: Response, next: NextFunction) {
        try {
            const response = await ShoppingCartService.get(req.user!);
            res.status(200).json({
                data: response
            })
        } catch (e) {
            next(e);
        }
    }
}
