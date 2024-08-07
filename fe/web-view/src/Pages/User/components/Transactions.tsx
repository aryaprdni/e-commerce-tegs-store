import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FaShoppingBag } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

const TransactionsContent = () => (
  <>
    <Box mt={-5} w={"1000px"}>
      <Heading size="lg">Transactions</Heading>
      <Flex border={"1px solid gray"} p={5} mt={5} w={"90%"} alignItems={"center"} gap={5} borderRadius={"10px"}>
        <Text><FaShoppingBag fontSize={"20px"}/></Text>
        <Box>
          <Text>Order #1</Text>
          <Text color={"gray.500"}>10-10-2024</Text>
        </Box>
        <Flex align={"center"} gap={2} mt={5}>
          <TbPointFilled />
          <Text color={"gray.500"}>Rp 10.000</Text>
        </Flex>
        <Flex align={"center"} gap={2} mt={5}>
          <TbPointFilled />
          <Text color={"gray.500"}>Items : 2 product</Text>
        </Flex>
        <Flex align={"center"} gap={2} ml={40}>
          <TbPointFilled />
          <Text>Menunggu Konfirmasi</Text>
        </Flex>
      </Flex>

      <Flex border={"1px solid gray"} p={5} mt={5} w={"90%"} alignItems={"center"} gap={5} borderRadius={"10px"}>
        <Text><FaShoppingBag fontSize={"20px"}/></Text>
        <Box>
          <Text>Order #2</Text>
          <Text color={"gray.500"}>10-10-2024</Text>
        </Box>
        <Flex align={"center"} gap={2} mt={5}>
          <TbPointFilled />
          <Text color={"gray.500"}>Rp 10.000</Text>
        </Flex>
        <Flex align={"center"} gap={2} mt={5}>
          <TbPointFilled />
          <Text color={"gray.500"}>Items : 2 product</Text>
        </Flex>
        <Flex align={"center"} gap={2} ml={40}>
          <TbPointFilled />
          <Text>Selesai</Text>
        </Flex>
      </Flex>

      <Flex border={"1px solid gray"} p={5} mt={5} w={"90%"} alignItems={"center"} gap={5} borderRadius={"10px"}>
        <Text><FaShoppingBag fontSize={"20px"}/></Text>
        <Box>
          <Text>Order #3</Text>
          <Text color={"gray.500"}>10-10-2024</Text>
        </Box>
        <Flex align={"center"} gap={2} mt={5}>
          <TbPointFilled />
          <Text color={"gray.500"}>Rp 10.000</Text>
        </Flex>
        <Flex align={"center"} gap={2} mt={5}>
          <TbPointFilled />
          <Text color={"gray.500"}>Items : 2 product</Text>
        </Flex>
        <Flex align={"center"} gap={2} ml={40}>
          <TbPointFilled />
          <Text>Selesai</Text>
        </Flex>
      </Flex>
    </Box>
  </>
);

export default TransactionsContent;
