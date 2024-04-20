import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const RegisterPage = () => {
  return (
    <Box w={"100%"} h={"100vh"} minHeight={"100%"}>
      <Box w={"100%"} h={"100%"} bg={"#fff"}>
        <Center mx={"auto"} mt={5}>
          <Image
            src="../../src/assets/img/logo3.png"
            w={"18rem"}
            h={"3.7rem"}
          />
        </Center>
        <Flex
          w={"90%"}
          h={"34rem"}
          mx={"auto"}
          mt={5}
          bg={"red"}
          flexWrap={"wrap"}
          // flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            w={{ base: "100%", md: "100%", lg: "55%", xl: "55%" }}
            h={"35rem"}
          >
            <Image
              src="../../src/assets/img/regis.gif"
              w={"100%"}
              h={"100%"}
            ></Image>
          </Box>
          <Box
            w={{ base: "100%", md: "100%", lg: "45%", xl: "45%" }}
            h={"100%"}
            bg={"green"}
          ></Box>
        </Flex>
      </Box>
    </Box>
  );
};
