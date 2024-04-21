import React from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <Box as="nav" w={"100%"} h={"5rem"} bg={"brand.primary"}>
        <Box
          w={"80%"}
          pt={"0.4rem"}
          mx={"auto"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Text fontSize={"0.6rem"} color={"white"}>
            Welcome to E-Commerce Tags Store
          </Text>
          <Box color={"white"}>
            <HStack>
              <Text fontSize={"0.7rem"}> Follow Us : </Text>

              <HStack>
                <Box _hover={{ cursor: "pointer", color: "#000" }}>
                  <FaTwitter size={15} />
                </Box>
                <Box _hover={{ cursor: "pointer", color: "#000" }}>
                  <FaFacebook size={15} />
                </Box>
                <Box _hover={{ cursor: "pointer", color: "#000" }}>
                  <FaInstagram size={15} />
                </Box>
                <Box _hover={{ cursor: "pointer", color: "#000" }}>
                  <FaGithub size={15} />
                </Box>
              </HStack>
            </HStack>
          </Box>
        </Box>
        <Box w={"80%"} mx={"auto"} mt={1} px={2}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Image
                src={"../../src/assets/img/logo.png"}
                alt="logo"
                w={"10rem"}
                h={"2rem"}
              />
            </Box>
            <Box width={"60%"}>
              <InputGroup>
                <Input
                  type="text"
                  border={"none"}
                  w={"100%"}
                  h={"2.4rem"}
                  bg={"#F5F5F5"}
                  borderRadius={"0.2rem"}
                  fontSize={"0.8rem"}
                  placeholder="Search for products"
                />
                <InputRightElement pr={4}>
                  <FaSearch size={15} />
                </InputRightElement>
              </InputGroup>
            </Box>
            <Box w={"10rem"} display={"flex"} alignItems={"center"}>
              <Box color={"white"}>
                <LuShoppingCart size={23} />
              </Box>

              <Box ml={3}>
                <HStack>
                  <Button
                    bg={"#fff"}
                    color={"brand.primary"}
                    border={"1px solid brand.secondary"}
                    borderRadius={"0.3rem"}
                    w={"4rem"}
                    h={"1.6rem"}
                    fontSize={"0.7rem"}
                  >
                    <Link to="/login">Login</Link>
                  </Button>

                  <Button
                    bg={"#01A95C"}
                    _hover={{ bg: "#20DF86" }}
                    color={"#fff"}
                    border={"1px solid #FFF"}
                    borderRadius={"0.3rem"}
                    w={"4rem"}
                    h={"1.6rem"}
                    fontSize={"0.7rem"}
                  >
                    <Link to="/register">Register</Link>
                  </Button>
                </HStack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
