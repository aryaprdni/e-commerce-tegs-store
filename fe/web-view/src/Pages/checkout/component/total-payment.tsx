import { Flex, Text } from "@chakra-ui/react";

const TotalPayment = () => {
  return (
    <Flex flexDirection="column" gap={2} textAlign="right" width={{ base: "100%", md: "30%" }} m={{ base: "auto", md: "auto 0 0 70%" }}>
      <Flex justifyContent="space-between">
        <Text>Subtotal product</Text>
        <Text marginLeft="auto">$345</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Delivery fee</Text>
        <Text marginLeft="auto">$0</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Service fee</Text>
        <Text marginLeft="auto">$0</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Total payment</Text>
        <Text marginLeft="auto">$345</Text>
      </Flex>
    </Flex>
  );
};

export default TotalPayment;
