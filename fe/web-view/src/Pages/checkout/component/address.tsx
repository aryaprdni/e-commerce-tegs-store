import { Box, Divider, Flex, Text } from "@chakra-ui/react"
import { FaMapMarkerAlt } from "react-icons/fa"

const Address = () => {
    return (
        <Box>
            <Flex alignItems={"center"} gap={2}>
                <Text>
                    <FaMapMarkerAlt />
                </Text>
                <Text fontWeight={"bold"}>
                    Address
                </Text>       
            </Flex>
            <Box mt={5} border={"0px solid grey"}p={5} bgColor={"#f0f0f0"} borderRadius={"10px"}>
                <Text>Fullname (+62)901-1111-2222</Text>
                <Divider orientation='horizontal' mt={2} mb={4}
                css={{
                    borderColor: "black",
                    borderWidth: "2px",
                    fontWeight: "bold"
                }}
                />
                <Text>Jl. Jend. Sudirman No. 1 Jakarta</Text>
            </Box>
        </Box>
    )
}

export default Address