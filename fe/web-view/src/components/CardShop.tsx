import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { ICardShop } from "../types/interface";

export const CardShop = ({ id, ...item }: ICardShop) => {
  return (
    <>
      <Box w={"100%"} h={"100%"} mx={"auto"}>
        <Box
          key={id}
          w={{ base: "50%", md: "50%", lg: "15rem", xl: "17rem" }}
          h={{ base: "50%", md: "50%", lg: "20rem", xl: "20rem" }}
          borderRadius={"10px"}
          _hover={{ cursor: "pointer", boxShadow: "xl" }}
          border={"1px solid #ddd"}
          mx={"auto"}
          overflow={"hidden"}
        >
          <Image
            src={item.image}
            w={"100%"}
            h={"73%"}
            objectFit={"revert-layer"}
          ></Image>
          <Box px={2}>
            <Text
              fontFamily={"poppins"}
              // fontWeight={500}
              mt={2}
              fontSize={"0.9rem"}
            >
              {item.name}
            </Text>
            <HStack>
              <Text fontFamily={"poppins"} fontSize={"1rem"} fontWeight={700}>
                {item.price}
              </Text>
              <Text ml={"auto"} fontSize={"0.7rem"} color={"#aaa"}>
                20 Stock
              </Text>
            </HStack>
            <HStack mt={1} pb={4}>
              <FaStar color="GOLD" />
              <Text fontSize={"0.7rem"} color={"GOLD"}>
                4.5
              </Text>
            </HStack>
          </Box>
        </Box>
      </Box>
    </>
  );
};
