/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Controller } from "react-hook-form";
import { useLoginValidation } from "../hooks/useLoginValidation";
import { toast } from "react-toastify";
import { API } from "../../../libs/axios";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";

export const FormLogin = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const { control, handleSubmit, setValue } = useLoginValidation(!isEmailValid);
  const navigate = useNavigate();

  const onSubmitEmail = async (data: any) => {
    try {
      const response = await API.post('/users/verify-email', { email: data.email });
      console.log("API response:", response);
      if (response.status === 200) {
        setIsEmailValid(true);
        setIsPasswordVisible(true);
        setIsEmailEditable(false);
      }
    } catch (error: any) {
      console.log("Error:", error);
      toast.error("Email not registered");
    }
  }

  const onSubmitPassword = async (data: any) => {
    try {
      const response = await API.post('/users/login', { email: data.email, password: data.password });
      console.log("Login response:", response);
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/');
      } else {
        toast.error("Login failed");
      }
    } catch (error: any) {
      console.log("Login error:", error);
      toast.error(error.response.data.errors);
    }
  };

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
          {!isEmailValid || isEmailEditable ? (
            <form onSubmit={handleSubmit(onSubmitEmail)}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                }}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={fieldState.invalid}>
                    <FormLabel fontSize={"1rem"}>Email</FormLabel>
                    <Input type="email" placeholder="Email" {...field} />
                    {fieldState.error ? (
                      <FormErrorMessage>
                        {fieldState.error.message}
                      </FormErrorMessage>
                    ) : (
                      <FormHelperText>
                        Example: email@TagsStore.com
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />

              <Button
                bg={"brand.primary"}
                w={"100%"}
                mt={5}
                color={"#fff"}
                _hover={{ bg: "green.400" }}
                type="submit"
              >
                Next
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmit(onSubmitPassword)}>
              <FormControl>
                <FormLabel fontSize={"1rem"}>Email</FormLabel>
                <InputGroup>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="email"
                        placeholder="Email"
                        {...field}
                        isReadOnly={!isEmailEditable}
                      />
                    )}
                  />
                  <InputRightElement>
                    <MdEdit
                      cursor="pointer"
                      onClick={() => {
                        setIsEmailEditable(true);
                        setIsEmailValid(false);
                      }}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Controller
                name="password"
                control={control}
                rules={{ required: "Password is required" }}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={fieldState.invalid} mt={4}>
                    <FormLabel fontSize={"1rem"}>Password</FormLabel>
                    <InputGroup size='md'>
                      <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        {...field}
                        value={field.value as string}
                      />
                      <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                          {show ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                      {fieldState.error && (
                      <FormErrorMessage>
                        {fieldState.error.message}
                      </FormErrorMessage>
                      )}
                  </FormControl>
                )}
              />

              <Button
                bg={"brand.primary"}
                w={"100%"}
                mt={5}
                color={"#fff"}
                _hover={{ bg: "green.400" }}
                type="submit"
              >
                Login
              </Button>
            </form>
          )}
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
            window.location.href = "http://localhost:5000/auth/google";
          }}
        >
          <Text fontWeight={500}> Google</Text>
        </Button>
        <HStack textAlign={"center"} mt={4}>
          <Text
            fontSize={"0.8rem"}
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
