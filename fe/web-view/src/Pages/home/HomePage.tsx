import { Box, Heading, Image } from "@chakra-ui/react";
import { Coreusel } from "../../components/Coreusel";
import { Navbar } from "../../components/Navbar";
import { Informasi } from "./Components/Informasi";
import { Tag } from "../../components/Tag";

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

        <Box w={"100%"} h={"xl"} mt={6}>
          <Box w={"80%"} mx={"auto"} h={"100%"}>
            <Tag clideren="Categori" />
          </Box>
        </Box>

        <Box w={"100%"} h={"10rem"} mt={1000}></Box>
      </Box>
    </>
  );
};
