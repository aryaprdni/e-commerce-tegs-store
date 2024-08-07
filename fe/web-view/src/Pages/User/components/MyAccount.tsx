import { Avatar, Box, Center, Flex, FormControl, Heading, Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import { MdEdit, MdEmail, MdOutlinePhone } from "react-icons/md";

const MyAccount = () => (
  <>
    <Box w={"1000px"} h={"100%"}>
      <Heading size="lg" whiteSpace={"nowrap"}>My Account</Heading>
      <FormControl>
        <Box mt={3} position={"relative"} marginTop={"20px"}>
          <Avatar
            name="Segun Adebayo"
            src="https://bit.ly/dan-abramov"
            size={"xl"}
          />
          <Center
            w={"3rem"}
            h={"2rem"}
            borderRadius={"50%"}
            bg={"rgba(0, 0, 0, 0.6)"}
            as="label"
            pos={"absolute"}
            top={61}
            left={14}
          >
            <MdEdit size={28} color="#00AA5B" />
            <Input
              type="file"
              hidden
              accept="image/jpg,image/png,image/jpeg"
            />
          </Center>
        </Box>
        <Flex justifyContent={"space-between"} gap={10} w="100%">
          <Box w="100%">
            <Stack spacing={4} mt={5}>
              <Text mb={-3} color={"gray.500"}>Full Name</Text>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <CiUser color='gray.300' />
                </InputLeftElement>
                <Input type='text' variant="flushed" placeholder='Enter your full name' />
              </InputGroup>

              <Text mb={-3} mt={3} color={"gray.500"}>Number Phone</Text>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <MdOutlinePhone color='gray.300' />
                </InputLeftElement>
                <Input type='email' variant="flushed" placeholder='Enter your number phone' />
              </InputGroup>

              <Text mb={-3} mt={3} color={"gray.500"}>Province</Text>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <LuMapPin color='gray.300' />
                </InputLeftElement>
                <Input type='text' variant="flushed" placeholder='Enter your province' />
              </InputGroup>

              <Text mb={-3} mt={3} color={"gray.500"}>Street</Text>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <LuMapPin color='gray.300' />
                </InputLeftElement>
                <Input type='text' variant="flushed" placeholder='Street' />
              </InputGroup>
            </Stack>
          </Box>

          <Box w="100%">
            <Stack spacing={4} mt={5}>
              <Text mb={-3} color={"gray.500"}>Email</Text>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <MdEmail color='gray.300' />
                </InputLeftElement>
                <Input type='text' variant="flushed" placeholder='Email' />
              </InputGroup>

              <Text mb={-3} mt={3} color={"gray.500"}>Country</Text>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <LuMapPin color='gray.300' />
                </InputLeftElement>
                <Input type='email' variant="flushed" placeholder='Country' />
              </InputGroup>

              <Text mb={-3} mt={3} color={"gray.500"}>City</Text>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <LuMapPin color='gray.300' />
                </InputLeftElement>
                <Input type='text' variant="flushed" placeholder='Enter your city' />
              </InputGroup>

              <Text mb={-3} mt={3} color={"gray.500"}>Postal Code</Text>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <LuMapPin color='gray.300' />
                </InputLeftElement>
                <Input type='text' variant="flushed" placeholder='Enter your postal code' />
              </InputGroup>
            </Stack>
          </Box>
        </Flex>
      </FormControl>
    </Box>
  </>
);

export default MyAccount;
