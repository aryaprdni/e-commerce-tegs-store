import { Product, Category } from "@prisma/client";

export type ProductResponse = {
    id: number;
    product_name: string;
    stock: number;
    price: number;
    size: string[];
    image: string[];
    color: string[];
    description: string | null;
    rating: number | null;
    category: {
        id: number;
        category_name: string;
        parentCategoryId: number | null;
    } | null;
};

export type CreateProductRequest = {
    product_name : string;
    stock: number;
    price: number;
    size: string[];
    image: string[];
    description: string;
    rating: number;
    color: string[];
    category_id: number;
}

export type UpdateProductRequest = {
    id?: number;
    product_name? : string;
    stock?: number;
    price?: number;
    size?: string[];
    image?: string[];
    color?: string[];
    description?: string;
    rating?: number;
    category_id?: number;
}

export type SearchProductRequest = {
    product_name? : string;
    description?: string;
    category?: {
        category_name?: string;
    }
    // category_name: string;
}

export function toProductResponse(product: Product & { category?: {
    id: number; category_name: string; 
} | null }): ProductResponse {
    return {
        id: product.id,
        product_name: product.product_name,
        stock: product.stock,
        price: product.price,
        size: product.size,
        color: product.color,
        image: product.image,
        description: product.description,
        rating: product.rating,
        category: product.category
            ? {
                  id: product.category.id,
                  category_name: product.category.category_name,
                  parentCategoryId: null,
              }
            : null,
    };
}

