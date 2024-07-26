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
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const FormLogin = () => {
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
          Login
        </Text>

        <Box mt={5} mx={"auto"} w={"90%"}>
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
              Login
            </Button>
          </FormControl>
        </Box>
        <Text fontSize={"0.8rem"} color={"#bdb4c8"} textAlign={"center"} mt={3}>
          or list with
        </Text>

        <Button
          w={"100%"}
          mt={2}
          leftIcon={<FcGoogle size={25} />}
          variant="outline"
          onClick={() => {
            window.location.href = "http://localhost:3000/auth/google";
          }}
        >
          <Text fontWeight={500}> Google</Text>
        </Button>
        <HStack textAlign={"center"} mt={4}>
          <Text
            fontSize={"0.8rem"}
            // fontWeight={700}
            mx={"auto"}
            pb={5}
            color={"#aaa"}
            textAlign={"center"}
          >
            Don't have a Tegs Store account?
            <Link to="/register">
              <span
                style={{
                  color: "#00AA5B",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  marginLeft: "2px",
                }}
              >
                Register
              </span>
            </Link>
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};
