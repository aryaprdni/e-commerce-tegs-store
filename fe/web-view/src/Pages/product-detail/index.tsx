import { Box, Container} from "@chakra-ui/react";
import ProductDetailComps from "./components/product-detail";
import InformationDescription from "./components/information-description";
import SimilarProduct from "./components/similliar-product";
import { Layout } from "../../Layout";

const ProductDetail = () => {
    return (
        <>  
            <Layout>
                <Container maxW='container.xl'>
                    <Box>
                        
                        {/* Product Detail */}
                        <Box>
                            <ProductDetailComps />
                        </Box>

                        {/* Information */}
                        <Box mt={"100px"}>
                            <InformationDescription />
                        </Box>
                        
                        {/* Similar Products */}
                        <Box>
                            <SimilarProduct />
                        </Box>
                    </Box>
                </Container>
            </Layout>
        </>
    )
};
export default ProductDetail