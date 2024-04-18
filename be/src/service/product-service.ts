import { User, Product } from "@prisma/client";
import { CreateProductRequest, ProductResponse, SearchProductRequest, UpdateProductRequest, toProductResponse } from "../model/product_model";
import { ProductValidation } from "../validation/product-validation";
import { Validation } from "../validation/validation";
import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response.error";

export class ProductService {
    static async create(user: User, request: CreateProductRequest) : Promise<ProductResponse> {
        const createProductRequest = Validation.validate(ProductValidation.CREATE, request);

        const record = {
            ...createProductRequest,
            ...{email: user.email}
        }

        const product = await prismaClient.product.create({
            data : record
        });

        return toProductResponse(product)
    }

    static async checkProductMustExists(email: string, productId : number) : Promise<Product> {
        const product = await prismaClient.product.findFirst({
            where: {
                id: productId,
                email: email
            }
        })

        if(!product) {
            throw new ResponseError(404, "Product not found")
        }

        return product
    }
    static async update(user: User, request: UpdateProductRequest): Promise<ProductResponse> {
        const updateRequest = Validation.validate(ProductValidation.UPDATE, request);

        if (!updateRequest.id) {
            throw new ResponseError(400, "Invalid product ID");
        }
    
        await this.checkProductMustExists(user.email, updateRequest.id);
    
        const product = await prismaClient.product.update({
            where: {
                id: updateRequest.id,
                email: user.email
            },
            data: updateRequest
        });
    
        return toProductResponse(product);
    }
    
    static async get(productId: number): Promise<ProductResponse | null> {
        const product = await prismaClient.product.findUnique({
            where: {
                id: productId
            },
            include: {
                category: true
            }
        });
        if (!product) {
            return null;
        }
    
        return toProductResponse(product);
    }
    

    static async getAll(): Promise<ProductResponse[]> {
        const products = await prismaClient.product.findMany({
            include: {
                category: {
                    select: {
                        id: true,
                        name_category: true
                    }
                }
            }
        });
        
        const productResponses = products.map(product => toProductResponse(product));
        
        return productResponses;
    }
    
    

    static async delete(user: User, id: number) : Promise<ProductResponse> {
        await this.checkProductMustExists(user.email, id);

        const product = await prismaClient.product.delete({
            where: {
                id: id,
                email: user.email
            }
        });

        return toProductResponse(product);
    }

    static async search(request: SearchProductRequest) : Promise<ProductResponse[]> {
        const searchRequest = Validation.validate(ProductValidation.SEARCH, request);

        const filters = [];

        if(searchRequest.product_name) {
            filters.push({
                product_name: {
                    contains: searchRequest.product_name
                }
            })
        }

        if(searchRequest.description) {
            filters.push({
                description: {
                    contains: searchRequest.description
                }
            })
        }

        if (searchRequest.category) {
            filters.push({
                category: {
                    name_category: {
                        contains: searchRequest.category
                    }
                }
            })
        }

        const products = await prismaClient.product.findMany({
            where: {
                AND: filters
            }
        })

        const productResponses = products.map(product => toProductResponse(product));

        return productResponses
    }
}
