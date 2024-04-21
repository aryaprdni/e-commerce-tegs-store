import { Box, Button, Center, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ICardCart } from "../../../types/interface";

export const CartCard = (props: ICardCart) => {
  const [quantity, setQuantity] = useState(1);
  const price = props.price; // Harga per unit MacBook Air
  const total = quantity * price;

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Box mt={5} padding={1} display={"flex"} boxShadow={"0 0 2px;"} p={2} border={"0px"}>
      <Center>
        <Box width={"260px"} display={"flex"} alignItems={"center"}>
          <Image
            src={props.image}
            alt="macBook air"
            width={"80px"}
            height={"80px"}
            ml={"50px"}
          />
          <Text flex="1" ml={"15px"}>
            {props.name}
          </Text>
        </Box>
        <Box width={"150px"} display={"flex"} ml={"35px"}>
          <Text>
            {props.price}
          </Text>
        </Box>
        <Box ml={"70px"}>
          <Button onClick={handleDecrease}>-</Button>
          <Input
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            w={"45px"}
            ml={1}
            mr={1}
          />
          <Button onClick={handleIncrease}>+</Button>
        </Box>
        <Text flex={"1 0 0"} ml={"150px"}>
          Rp {total.toLocaleString()}
        </Text>
      </Center>
    </Box>
  );
};
