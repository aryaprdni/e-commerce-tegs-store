import { Box, Container} from "@chakra-ui/react";
import ProductDetailComps from "./components/product-detail";
import InformationDescription from "./components/information-description";
import SimilarProduct from "./components/similliar-product";
import { Layout } from "../../Layout";
import { useProductDetail } from "./hooks/product-detail";

const ProductDetail = () => {
    const { productData} = useProductDetail();
    console.log("productData: ", productData);
    return (
        <Layout>
            <Container maxW='container.xl'>
                <Box>
                    {/* Product Detail */}
                    <Box>
                        <ProductDetailComps 
                            id={productData?.id}
                            product_name={productData?.product_name}
                            description={productData?.description}
                            stock={productData?.stock}
                            price={productData?.price}
                            size={productData?.size}
                            color={productData?.color}
                            image={productData?.image}
                            rating={productData?.rating}
                            category_id={productData?.category_id}
                        />
                    </Box>
                    {/* Information */}
                    <Box mt={"100px"}>
                        <InformationDescription 
                            description={productData?.description} 
                        />
                    </Box>
                    
                    {/* Similar Products */}
                    <Box>
                        <SimilarProduct />
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
};
export default ProductDetail;
