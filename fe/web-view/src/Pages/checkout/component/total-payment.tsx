import { Button, Flex, Text } from "@chakra-ui/react";
import { useCheckout } from "../hooks/useCheckout";
import { useProductFromCart } from "../hooks/useProduct";

const TotalPayment = () => {
  const { product } = useProductFromCart();
  const { pay } = useCheckout();
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
      <Button colorScheme='whatsapp' borderRadius={10} w={"80%"} m={"auto"} mt={10} onClick={pay}>Payment Method</Button>
    </Flex>
  );
};

export default TotalPayment;
