import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { Layout } from "../../Layout";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { CartCard } from "./componnent/cartCard";
import { cart } from "../../Json/Cart";
// import React from "react";

export const ShoppingCard = () => {
  return (
    <Box w={"100%"} h={"100%"} maxH={"100vh"}>
         <Layout>
            {/* menu */}
            <Box p={3} display={"flex"} bgGradient="linear(to-l, #32436F, #1A2D55)">
                <Center ml={"120px"}>
                <GoHome fontSize={"21px"}/>
                <Text ml={1} mr={2}>Home</Text>
                <IoIosArrowForward fontSize={"19px"} />
                <Text ml={1} color={"green"}>Shopping Card</Text>
                </Center>
            </Box>

            {/* cart card */}
            <Box justifyContent={"center"} alignItems={"center"} display={"flex"} p={"5px"}>
              <Box mt={"50px"} height={"100%"} width={"70%"}>
                <Box display={"flex"} textAlign={"start"} boxShadow={"0 0 1px;"} p={"15px"}>
                    <Text ml={"50px"}>Product</Text>
                    <Text ml={"180px"}>Price</Text>
                    <Text ml={"190px"}>Quantity</Text>
                    <Text ml={"200px"}>subtotal</Text>
                </Box>
                {/* card */}
                {cart.map((item)=> (
                    <CartCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    id={item.id}
                    />
                ))}

                {/* button */}
                <Box display={"flex"}>
                  <Box marginLeft={"100px"} marginRight={"100px"} mt={"20px"} height={"100%"} width={"70%"} justifyContent={"space-between"} display={"flex"}>
                    <Button bg={"brand.primary"} variant='outline' marginLeft={"-100px"} paddingRight={"35px"} paddingLeft={"35px"}>Return To Shop</Button>
                    <Button bg={"brand.primary"} variant='outline' marginRight={"-202px"} paddingRight={"35px"} paddingLeft={"35px"}>Update Cart</Button>
                  </Box>
                </Box>
              </Box>
            </Box>

             {/* cuppon input */}
              <Box justifyContent={"center"} alignItems={"center"} display={"flex"}>
               <Box marginLeft={"100px"} marginRight={"100px"} mt={"50px"} height={"100%"} width={"70%"} display={"flex"}>
                <Input placeholder='Coupon Code' width={"250px"} mr={5}/>
                <Button bg={"brand.primary"}>Apply Coupon</Button>
                <Box border={"1px"} width={"50%"} p={5} ml={"100px"} borderRadius={5}>
                  <Text fontSize={"large"} mb={2}>Cart Total</Text>
                  <Box borderBottom={"1px"} display={"flex"} justifyContent={"space-between"} mt={2} mb={1} paddingBottom={1}>
                    <Text>Subtotal:</Text>
                    <Text>Rp 20.000.000</Text>
                  </Box>
                  <Box borderBottom={"1px"} display={"flex"} justifyContent={"space-between"} mt={2} mb={1} paddingBottom={1}>
                    <Text>Shiping:</Text>
                    <Text>Free</Text>
                  </Box>
                  <Box mt={2} display={"flex"} justifyContent={"space-between"}>
                    <Text>Total:</Text>
                    <Text>Rp 20.000.000</Text>
                  </Box>
                  <Box display={"flex"} justifyContent={"center"} mt={5}> 
                    <Button bg={"brand.primary"}>Procees To Checkout</Button>
                  </Box>
                </Box>
               </Box>
              </Box>
         </Layout>
    </Box>
  )
};
