export interface IProductDetail {
    id?: number;
    product_name?: string;
    description?: string;
    stock?: number;
    price?: number;
    color?: string[];
    size?: string[];
    image?: string[];
    rating?: number;
    category_id?: number;
}