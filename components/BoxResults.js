import React from "react";
import { Flex } from "@chakra-ui/react";

const BoxResults = ({ children }) => {
    return (
        <Flex
            flex='1'
            bg='primaryGrey'
            borderRadius='8px'
            // borderColor='secondaryGrey'
            borderColor='red.500'
            borderWidth='1px'
            margin='16px'
            padding='10px'
            direction='column'
            minW="800px"
            maxW="1000px"
        >
            {children}
        </Flex>
    )
}

export default BoxResults;