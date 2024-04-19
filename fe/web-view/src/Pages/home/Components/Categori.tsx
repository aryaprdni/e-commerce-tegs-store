import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { ICategori } from "../../../types/interface";

export const Categori = (props: ICategori) => {
  return (
    <>
      <Box w={"100%"} h={"100%"}>
        <Box
          w={"90%"}
          mx={"auto"}
          h={"100%"}
          display={"flex"}
          flexWrap={"wrap"}
        >
          <Box
            key={props.id}
            w={{ base: "100%", md: "16rem", lg: "100%", xl: "24rem" }}
            // bg={{ base: "#fff", md: "blue", lg: "red", xl: "#fff" }}
            h={{ base: "15rem", md: "20rem", lg: "32rem" }}
            mx={"auto"}
            flexWrap={"wrap"}
            borderRadius={"15px"}
            background={`url(${props.image})`}
            backgroundSize={"cover"}
            backgroundPosition={{
              base: "top",
              md: "center",
            }}
            m={2}
            className="my-box"
          >
            <Box
              w={"100%"}
              h={"100%"}
              borderRadius={"15px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                ".my-box:hover &": {
                  background: "rgba(0,0,0,0.6)",
                },
              }}
            >
              <Text
                color={"brand.primary"}
                display={"none"}
                fontSize={"1.8rem"}
                textAlign={"center"}
                m={"auto"}
                fontWeight={700}
                sx={{
                  ".my-box:hover &": {
                    display: "block",
                  },
                }}
              >
                {props.name}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
