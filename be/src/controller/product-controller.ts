import { Request, Response, NextFunction } from "express";
import { UserRequest } from "../type/user-request";
import { CreateProductRequest, SearchProductRequest, UpdateProductRequest } from "../model/product_model";
import { ProductService } from "../service/product-service";
import cloudinary from "../libs/cloudinary";
import { ResponseError } from "../error/response.error";

export class ProductController {
    static async create(req: UserRequest & Request, res: Response, next: NextFunction) {
        try {
            console.log(req.body)
            let imagePaths: string[] = [];

            if (req.files && req.files.length) {
                for (const file of req.files as Express.Multer.File[]) {
                    const result = await cloudinary.destination(file.filename);
                    imagePaths.push(result);
                }
            }

            let size: any; 
            if (req.body.size) {
                size = JSON.parse(req.body.size);
            } else {
                size = [];
            }

            let color: any;
            if (req.body.color) {
                color = JSON.parse(req.body.color);
            } else {
                color = [];
            }

            const request: CreateProductRequest = {
                ...req.body,
                image: imagePaths,
                stock: parseInt(req.body.stock),
                price: parseFloat(req.body.price),
                rating: parseInt(req.body.rating),
                category_id: parseInt(req.body.category_id),
                color: color,
                size: size
            };

            console.log(request)
            const response = await ProductService.create(req.user!, request);
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

    static async update(req: UserRequest & Request, res: Response, next: NextFunction) {
        try {
            let imagePaths: string[] = [];

            if (req.files && req.files.length) {
                for (const file of req.files as Express.Multer.File[]) {
                    const result = await cloudinary.destination(file.filename);
                    imagePaths.push(result);
                }
            }

            const request: UpdateProductRequest = {
                ...req.body,
                image: imagePaths.length ? imagePaths : undefined,
                id : Number(req.params.productId)
            };

            console.log(request)

            const response = await ProductService.update(req.user!, request);

            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

    static async get(req: Request, res: Response, next: NextFunction) {
        try {
            const productId = Number(req.params.productId);
            const response = await ProductService.get(productId);

            if (!response) {
                throw new ResponseError(404, "Product not found");
            }

            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await ProductService.getAll();
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

    static async delete(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const productId = Number(req.params.productId);
            const response = await ProductService.delete(req.user!, productId);
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }
    
    static async search(req: Request, res: Response, next: NextFunction) {
        try {
            const request: SearchProductRequest = {
                product_name: req.query.product_name as string,
                description: req.query.description as string,
                category: { category_name: req.query.category_name as string }
            }

            const response = await ProductService.search(request);
    
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }
    
    static async getSimilarProducts(req: Request, res: Response, next: NextFunction) {
        try {
            const productId = Number(req.params.productId);
            const response = await ProductService.getSimilarProducts(productId);
    
            res.status(200).json({
                data: response
            });
        } catch (e) {
            next(e);
        }
    }
}
