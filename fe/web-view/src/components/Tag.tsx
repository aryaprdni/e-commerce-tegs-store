import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { ITag } from "../types/interface";

export const Tag = ({ clideren }: ITag) => {
  return (
    <>
      <Box w={"100%"} h={"100%"}>
        <Box position={"relative"} w={170}>
          <Heading
            fontFamily={"Poppins"}
            position={"relative"}
            zIndex={10}
            // bg={"red"}
            fontWeight={800}
          >
            {clideren}
          </Heading>
          <Image
            src="../../src/assets/img/vector.png"
            w={100}
            position={"absolute"}
            top={6}
            right={0}
            zIndex={1}
          />
        </Box>
      </Box>
    </>
  );
};
