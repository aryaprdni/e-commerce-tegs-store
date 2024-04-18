import { Product, Category } from "@prisma/client";

export type ProductResponse = {
    id: number;
    product_name: string;
    stock: number;
    price: number;
    size: string[];
    image: string[];
    description: string | null;
    rating: number | null;
    email: string;
    category: {
        id: number;
        name_category: string;
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
    email: string;
    category_id: number;
}

export type UpdateProductRequest = {
    id?: number;
    product_name? : string;
    stock?: number;
    price?: number;
    size?: string[];
    image?: string[];
    description?: string;
    rating?: number;
    email?: string;
    category_id?: number;
}

export type SearchProductRequest = {
    product_name? : string;
    description?: string;
    category?: string;
}

export function toProductResponse(product: Product & { category?: {
    id: number; name_category: string; 
} | null }): ProductResponse {
    return {
        id: product.id,
        product_name: product.product_name,
        stock: product.stock,
        price: product.price,
        size: product.size,
        image: product.image,
        description: product.description,
        rating: product.rating,
        email: product.email,
        category: product.category
            ? {
                  id: product.category.id,
                  name_category: product.category.name_category,
                  parentCategoryId: null, // Jika parentCategoryId tidak tersedia
              }
            : null,
    };
}

