import { useEffect, useState } from "react";
import { API } from "../../../libs/axios";
import { IProductDetail } from "../../../types/product-detail";

export function useProductDetail() {
    const [productData, setProductData] = useState<IProductDetail>();

    async function getProductDetail() {
        try {
            const response = await API.get("/products/12");
            console.log("response.data: ", response.data);
            setProductData(response.data.data);
        } catch (error) {
            console.log("Error getting product detail: ", error);
        }
    }

    useEffect(() => {
        getProductDetail();
    }, []);

    return {
        productData
    }
}