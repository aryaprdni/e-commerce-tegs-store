import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Coreusel } from "../../components/Coreusel";
import { Navbar } from "../../components/Navbar";
import { Informasi } from "./Components/Informasi";
import { Tag } from "../../components/Tag";
import { Categori } from "./Components/Categori";
import { categori } from "../../Json/Categori";
import { FaStar } from "react-icons/fa";
import { CardShop } from "../../components/CardShop";
import { cardShop } from "../../Json/CardShop";

export const HomePage = () => {
  return (
    <>
      <Box w={"100%"} h={"100%"} maxH={"100vh"}>
        <Navbar />

        {/* Coreusel slider */}
        <Box as="section" w={"100%"} height={"28rem"} mt={4}>
          <Box
            w={"80%"}
            mx={"auto"}
            h={"100%"}
            // bg={"red"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Coreusel />
          </Box>
        </Box>

        {/* information */}
        <Box
          w={"100%"}
          h={{ base: "auto", md: "100%", lg: "8rem", xl: "8rem" }}
          bg={"brand.primary"}
          mt={5}
        >
          <Informasi />
        </Box>

        {/* Categori */}

        <Box w={"100%"} h={"100%"} minHeight={"20rem"} my={6}>
          <Box w={"80%"} mx={"auto"} h={"100%"}>
            {/* Tag */}
            <Tag clideren="Categori" />

            <Box
              w={"100%"}
              // h={"auto"}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={{ base: "column", md: "row" }}
              alignItems={"center"}
              mt={5}
            >
              {/* Categori awal */}
              {categori.map((item) => (
                <Categori
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  id={item.id}
                />
              ))}
              {/* Categori akhir */}
            </Box>
          </Box>
        </Box>
        {/* Benner */}
        <Box
          w={"100%"}
          h={{ base: "auto", md: "100%", lg: "33.5rem" }}
          mt={"30px"}
        >
          <Image
            src="../../src/assets/img/Banner.png"
            w={"100%"}
            h={"100%"}
          ></Image>
        </Box>

        {/* BEST Produk */}
        <Box w={"100%"} h={"24rem"} my={5}>
          <Box w={"90%"} mx={"auto"}>
            {/* Tag */}
            <Tag clideren="Best Product" />

            {/* Categori awal */}
            <Box
              w={"100%"}
              h={"100%"}
              display={"flex"}
              justifyContent={"space-evenly"}
              // flexWrap={"wrap"}
              // flexDirection={{ base: "row", md: "row" }}
              bg={"red"}
              gap={4}
              mt={4}
            >
              {cardShop.map((item) => (
                <CardShop key={item.id} {...item} />
              ))}
            </Box>
          </Box>
        </Box>

        <Box w={"100%"} h={"10rem"} mt={1000}></Box>
      </Box>
    </>
  );
};
