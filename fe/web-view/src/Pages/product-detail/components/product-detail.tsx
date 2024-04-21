import { useState } from 'react';
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { FaStar } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

const ProductDetailComps = () => {
    const [selectedImage, setSelectedImage] = useState('../../../src/assets/img/combed24s.png');
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageClick = (newImage: string, index : number) => {
        setSelectedImage(newImage);
        setSelectedImageIndex(index);
    };

    return (
        <Flex mt={10}>
            <Flex flexDirection={"column"}>
                <Flex border={'0.4px solid #ddd'} p={5} justifyContent={"center"}>
                    <Image src={selectedImage} height={350} width={350} />
                </Flex>
                <Flex mt={5} gap={3}>
                    <Image src='../../../src/assets/img/combed24s.png' h={70} w={70} border={selectedImageIndex === 0 ? '4px solid green' : '0.4px solid #ddd'} onClick={() => handleImageClick('../../../src/assets/img/combed24s.png', 0)} />
                    <Image src='../../../src/assets/img/bp1.jpg' h={70} w={70} border={selectedImageIndex === 1 ? '4px solid green' : '0.4px solid #ddd'} onClick={() => handleImageClick('../../../src/assets/img/bp1.jpg', 1)} />
                    <Image src='../../../src/assets/img/bp2.jpg' h={70} w={70} border={selectedImageIndex === 2 ? '4px solid green' : '0.4px solid #ddd'} onClick={() => handleImageClick('../../../src/assets/img/bp2.jpg', 2)} />
                    <Image src='../../../src/assets/img/bp3.jpg' h={70} w={70}border={selectedImageIndex === 3 ? '4px solid green' : '0.4px solid #ddd'} onClick={() => handleImageClick('../../../src/assets/img/bp3.jpg', 3)} />
                    <Image src='../../../src/assets/img/bp4.png' h={70} w={70} border={selectedImageIndex === 4 ? '4px solid green' : '0.4px solid #ddd'} onClick={() => handleImageClick('../../../src/assets/img/bp4.png', 4)} />
                </Flex>
            </Flex>
            <Box alignItems="center" ml={10} w={900}>
                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, debitis cupiditate? Cumque molestiae laboriosam et, laudantium officiis sunt quis ipsum?
                </Text>
                <Flex alignItems="center">
                    <FaStar color="gold" fontSize={20} />
                    <Text ml={2} fontSize={15} mt={3}>4.7 Star Rating (21,671 User feedback)</Text>
                </Flex>
                <Text fontWeight={700} fontSize={40} mt={5}> Rp 200.000
                </Text>
                <Text fontWeight={700} fontSize={20} mt={5}>Choose color</Text>
                <Flex gap={3} mt={5}>
                    <Flex border={'0.4px solid #ddd'} p={2} justifyContent={"center"} textAlign={"center"} borderRadius={15} w={90} h={10}>
                        <Text ml={2}>Hitam</Text>
                    </Flex>
                    <Flex border={'0.4px solid #ddd'} p={2} justifyContent={"center"} textAlign={"center"} borderRadius={15} w={90} h={10}>
                        <Text ml={2}>Merah</Text>
                    </Flex>
                    <Flex border={'0.4px solid #ddd'} p={2} justifyContent={"center"} textAlign={"center"} borderRadius={15} w={90} h={10}>
                        <Text ml={2}>Putih</Text>
                    </Flex>
                </Flex>

                <Text fontWeight={700} fontSize={20} mt={5}>Choose size</Text>
                <Flex gap={3} mt={5}>
                    <Flex border={'0.4px solid #ddd'} p={2} justifyContent={"center"} textAlign={"center"} borderRadius={15} w={50} h={10}>
                        <Text ml={2}>M</Text>
                    </Flex>
                    <Flex border={'0.4px solid #ddd'} p={2} justifyContent={"center"} textAlign={"center"} borderRadius={15} w={50} h={10}>
                        <Text ml={2}>L</Text>
                    </Flex>
                    <Flex border={'0.4px solid #ddd'} p={2} justifyContent={"center"} textAlign={"center"} borderRadius={15} w={50} h={10}>
                        <Text ml={2}>XL</Text>
                    </Flex>
                </Flex>

                <Flex mt={12}>
                    <Flex border={'0.4px solid #ddd'} p={2} justifyContent={"center"} textAlign={"center"} h={10} width={"150px"}
                    gap={10}
                    >
                        <Text>-</Text>
                        <Text>1</Text>
                        <Text>+</Text>
                    </Flex>

                    <Flex ml={5 } border={'0.4px solid #ddd'} p={2} justifyContent={"center"} textAlign={"center"} h={10} width={"200px"} gap={2} bgColor={"#1cb86f"} color={"#fff"}>
                        ADD TO CARD <FiShoppingCart />
                    </Flex>

                    <Box ml={5 } border={'0.4px solid #ddd'} p={2} justifyContent={"center"} textAlign={"center"} h={10} width={"150px"} gap={2} bgColor={"#1cb86f"} color={"#fff"}>
                        BUY NOW
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}

export default ProductDetailComps;
