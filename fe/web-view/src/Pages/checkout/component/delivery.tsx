import { Box, Checkbox, Divider, Flex, Text } from "@chakra-ui/react"

const Delivery = () => {
    return (
        <Box>
            <Text fontSize={"1.2rem"} fontWeight={700}>Choose Delivery</Text>
            <Divider orientation='horizontal' mt={2} mb={4} />
            <Flex justifyContent={"space-between"} mb={4}>
                <Checkbox colorScheme='green' defaultChecked>
                    SICEPAT
                </Checkbox>
                <Text>100</Text>
            </Flex>
            <Divider orientation='horizontal' mt={2} mb={4} css={{ borderColor: "black", borderWidth: "1px", fontWeight: "bold" }}/>
        </Box>
    )
}

export default Delivery