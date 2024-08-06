/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Center, Image, Input, Select, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

export const CartCard = (props: any) => {
  const [quantity, setQuantity] = useState(props.quantity);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    props.onQuantityChange(props.id, quantity + 1, props.size, props.color);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      props.onQuantityChange(props.id, quantity - 1, props.size, props.color);
    }
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = event.target.value;
    props.onSizeChange(props.id, newSize);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newColor = event.target.value;
    props.onColorChange(props.id, newColor);
  };

  return (
    <Box mt={5} padding={1} display={"flex"} boxShadow={"0 0 2px;"} p={2} border={"0px"}>
      <Center width="100%">
        <Box width={"200px"} display={"flex"} alignItems={"center"}>
          <Image
            src={props.image}
            width={"80px"}
            height={"80px"}
            ml={"20px"}
          />
          <Text flex="1" ml={"15px"}>
            {props.name}
          </Text>
        </Box>
        <Box width={"150px"} display={"flex"} ml={"90px"}>
          <Text>Rp {props.price}</Text>
        </Box>
        <Box width={"150px"} display={"flex"} ml={"75px"}>
          <Select value={props.size} onChange={handleSizeChange}>
            {props.sizes.map((size: string) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </Select>
        </Box>
        <Box width={"150px"} display={"flex"} ml={"30px"}>
          <Select value={props.color} onChange={handleColorChange}>
            {props.colors.map((color: string) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </Select>
        </Box>
        <Box display={"flex"} alignItems={"center"} ml={"85px"}>
          <Button onClick={handleDecrease}>-</Button>
          <Input
            value={quantity}
            onChange={(e) => {
              const newQuantity = parseInt(e.target.value) || 1;
              setQuantity(newQuantity);
              props.onQuantityChange(props.id, newQuantity, props.size, props.color);
            }}
            w={"45px"}
            ml={1}
            mr={1}
          />
          <Button onClick={handleIncrease}>+</Button>
        </Box>
        <Text flex={"1 0 0"} ml={"80px"}>
          Rp {props.sub_total}
        </Text>
        <Button colorScheme="red" onClick={() => props.onRemoveItem(props.id)} ml="auto">
          <MdDelete />
        </Button>
      </Center>
    </Box>
  );
};
