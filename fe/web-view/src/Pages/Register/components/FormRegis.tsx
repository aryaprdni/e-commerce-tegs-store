import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const FormRegis = () => {
  return (
    <Box w={"100%"} h={"100%"}>
      <Box
        w={{ base: "100%", md: "100%", lg: "24rem" }}
        h={"100%"}
        bg={"#fff"}
        mx={"auto"}
        boxShadow={"lg"}
        px={5}
        py={2}
        borderRadius={"8px"}
      >
        <Text fontSize={"1.5rem"} mt={3} fontWeight={700} textAlign={"center"}>
          Register Now
        </Text>
        <HStack textAlign={"center"} mt={2}>
          <Text
            fontSize={"0.8rem"}
            // fontWeight={700}
            mx={"auto"}
            textAlign={"center"}
          >
            Already have a Tegs Store account?{" "}
            <Link to={"/login"}>
              <span
                style={{
                  color: "#00AA5B",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  marginLeft: "2px",
                }}
              >
                Sign in
              </span>
            </Link>
          </Text>
        </HStack>
        <Box mt={5} mx={"auto"} w={"90%"}>
          <Button
            w={"100%"}
            leftIcon={<FcGoogle size={25} />}
            variant="outline"
          >
            <Text fontWeight={500}> Google</Text>
          </Button>
        </Box>
        <Text fontSize={"0.8rem"} color={"#bdb4c8"} textAlign={"center"} mt={3}>
          or list with
        </Text>

        <FormControl>
          <FormLabel fontSize={"1rem"}>Email </FormLabel>
          <Input type="email" name="email" placeholder="Email" />
          <FormHelperText>Example: email@TagsStore.com</FormHelperText>

          <Button
            bg={"brand.primary"}
            w={"100%"}
            mt={5}
            color={"#fff"}
            _hover={{ bg: "green.400" }}
          >
            Register
          </Button>
        </FormControl>
        <Text
          fontSize={"0.8rem"}
          color={"#aaa"}
          textAlign={"center"}
          mt={3}
          pb={4}
        >
          By registering, I agree to Terms and Conditions and Privacy Policy
        </Text>
      </Box>
    </Box>
  );
};
