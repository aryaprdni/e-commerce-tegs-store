import { Box, Center, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Coreusel } from "../../components/Coreusel";
import { Navbar } from "../../components/Navbar";
import { Informasi } from "./Components/Informasi";
import { Tag } from "../../components/Tag";
import { Categori } from "./Components/Categori";
import { categori } from "../../Json/Categori";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { CardShop } from "../../components/CardShop";
import { cardShop } from "../../Json/CardShop";
import { Parallax } from "react-parallax";
import { ParallaxComponent } from "./Components/Parallax ";
import { Layout } from "../../Layout";

export const HomePage = () => {
  return (
    <>
      <Box w={"100%"} h={"100%"} maxH={"100vh"}>
        <Layout>
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
                flexDirection={{ base: "column", lg: "column", xl: "row" }}
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

          {/* BEST Produk awal */}
          <Box
            w={"100%"}
            h={{ base: "auto", md: "100%", lg: "auto", xl: "auto" }}
            my={5}
          >
            <Box w={"90%"} mx={"auto"}>
              {/* Tag */}
              <Tag clideren="Best Product" />

              <Box
                w={"100%"}
                h={"100%"}
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                flexWrap={{
                  base: "wrap",
                  md: "wrap",
                  lg: "nowrap",
                  xl: "nowrap",
                }}
                gap={4}
                mt={4}
              >
                {cardShop.map((item) => (
                  <CardShop key={item.id} {...item} />
                ))}
              </Box>
            </Box>
          </Box>
          {/* BEST Produk Akhir */}

          {/* Benner 2 */}
          <Box w={"100%"} h={"26rem"} position={"relative"}>
            <ParallaxComponent />
          </Box>

          {/* Recomen */}
          <Box
            w={"100%"}
            h={{ base: "auto", md: "100%", lg: "auto", xl: "auto" }}
            my={5}
          >
            <Box w={"90%"} mx={"auto"}>
              {/* Tag */}
              <Tag clideren="Recommendation " />
              <Box
                w={"100%"}
                h={"100%"}
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                flexWrap={{
                  base: "wrap",
                  md: "wrap",
                  lg: "nowrap",
                  xl: "nowrap",
                }}
                gap={4}
                mt={4}
              >
                {cardShop.map((item) => (
                  <CardShop key={item.id} {...item} />
                ))}
              </Box>
            </Box>
          </Box>
        </Layout>
      </Box>
    </>
  );
};
