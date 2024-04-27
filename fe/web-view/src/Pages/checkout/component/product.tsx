import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";

const Product = () => {
    return (
        <>  
            <Box>
                <Flex alignItems="center" justifyContent="space-evenly" mb={4}>
                    <Text>Product</Text>
                    <Text>Unit Price</Text>
                    <Text>Quantity</Text>
                    <Text>Total</Text>
                </Flex>
                
                <Box border={"1px solid #ddd"} p={4}>
                    <Flex alignItems="center" justifyContent="space-evenly" >
                        <Flex alignItems="center">
                            <Image src='../../../src/assets/img/combed24s.png' width={70} height={70}/>
                            <Box ml={4}>
                                <Text>T-shirt</Text>
                                <Text>Size: XL</Text>
                                <Text>Color: White</Text>
                            </Box>
                        </Flex>
                        <Text>$72.5</Text>
                        <Text>2</Text>
                        <Text>$72.5</Text>
                    </Flex>
                    <Flex alignItems="center" justifyContent="space-evenly" mt={4}>
                        <Flex alignItems="center">
                            <Image src='../../../src/assets/img/combed24s.png' width={70} height={70}/>
                            <Box ml={4}>
                                <Text>T-shirt</Text>
                                <Text>Size: XL</Text>
                                <Text>Color: White</Text>
                            </Box>
                        </Flex>
                        <Text>$72.5</Text>
                        <Text>2</Text>
                        <Text>$72.5</Text>
                    </Flex>
                    <Flex alignItems="center" justifyContent="space-evenly" mt={4}>
                        <Flex alignItems="center">
                            <Image src='../../../src/assets/img/combed24s.png' width={70} height={70}/>
                            <Box ml={4}>
                                <Text>T-shirt</Text>
                                <Text>Size: XL</Text>
                                <Text>Color: White</Text>
                            </Box>
                        </Flex>
                        <Text>$72.5</Text>
                        <Text>2</Text>
                        <Text>$72.5</Text>
                    </Flex>
                    <Divider orientation='horizontal' mt={4} mb={4}/>
                    <Text textAlign={"end"} mr={"210px"}>Total : $345</Text>
                </Box>
            </Box>
        </>
    );
}

export default Product;
