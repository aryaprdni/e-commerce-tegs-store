/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    Text
} from "@chakra-ui/react";
import { useVerifyEmailValidation } from "../hooks/useVerifyEmailValidation";
import { toast } from "react-toastify";
import { MdMailOutline } from "react-icons/md";
import { Controller } from "react-hook-form";
import { API } from "../../../libs/axios";
import { useStore } from "../../../store/useStore";

export const FormVerifyEmail = () => {
    const { control, handleSubmit} = useVerifyEmailValidation();
    const { email } = useStore(state => ({ email: state.email }));

    const onSubmit = async (data: any) => {
        try {
          const response = await API.post('/verify-email', { email, code: data.code });
          console.log(response)
          toast.success("Email verified successfully!");
        } catch (error: any) {
            console.log(error)
          toast.error(error.response.data);
        }
    };

    return (
        <Box
            w={{ base: "90%", sm: "60%", md: "5 0%" }}
            mx="auto"
            mt={8}
            p={6}
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
        >
            <Flex flexDirection="column" mb={4} textAlign="center" justifyContent="center" alignItems="center">
                <MdMailOutline fontSize="50px" color={"green"}/>
                <Text fontWeight="bold">Masukkan Kode Verifikasi</Text>
                <Text>Kode verifikasi telah dikirim melalui e-mail ke mtkeker@gmail.com.</Text>
            </Flex>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="code"
                    control={control}
                    render={({ field, fieldState }) => (
                    <FormControl isInvalid={fieldState.invalid}>
                        <FormLabel fontSize={"1rem"}>Code</FormLabel>
                        <Input type="text" placeholder="Enter code" {...field} />
                        {fieldState.error ? (
                        <FormErrorMessage>
                            {fieldState.error.message}
                        </FormErrorMessage>
                        ) : (
                        <FormHelperText>Example: 123456</FormHelperText>
                        )}
                        <Button
                        bg={"brand.primary"}
                        w={"100%"}
                        mt={5}
                        color={"#fff"}
                        _hover={{ bg: "green.400" }}
                        type="submit"
                        >
                        Submit
                        </Button>
                    </FormControl>
                    )}
                />
            </form>
        </Box>
    );
};
