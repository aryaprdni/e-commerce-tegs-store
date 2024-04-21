import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "../../Layout";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cardShop } from "../../Json/CardShop";
import { CardShop } from "../../components/CardShop";
import { Tag } from "../../components/Tag";

export const SearchPage = () => {
  return (
    <Box w={"100%"} h={"100%"} minHeight={"100vh"}>
      <Layout>
        <Box w={"100%"} h={"100%"}>
          <Box
            w={"100%"}
            h={"2.5rem"}
            display={"flex"}
            alignItems={"center"}
            bg={"#F2F4F5"}
          >
            <Breadcrumb
              spacing="8px"
              w={"80%"}
              color={"#718096"}
              fontSize={"0.8rem"}
              mx={"auto"}
              separator={<FaChevronRight color="#718096" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                  Search
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>

          <Box w={"90%"} h={"100%"} mx={"auto"}>
            <Text
              color={"#000"}
              mt={3}
              ml={6}
              fontSize={"1.2rem"}
              fontWeight={700}
            >
              Applied Filters :
            </Text>

            <Box
              w={"100%"}
              h={{ base: "auto", md: "100%", lg: "auto", xl: "auto" }}
              my={4}
            >
              <Box w={"100%"}>
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
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};
