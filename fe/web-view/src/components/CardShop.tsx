import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { ICardShop } from "../types/interface";

export const CardShop = ({ id, ...item }: ICardShop) => {
  return (
    <>
      <Box w={"100%"} h={"100%"}>
        <Box
          key={id}
          w={"17rem"}
          h={"20rem"}
          borderRadius={"10px"}
          _hover={{ cursor: "pointer", boxShadow: "xl" }}
          border={"1px solid #ddd"}
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
                20 Terjual
              </Text>
            </HStack>
            <HStack mt={1}>
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
