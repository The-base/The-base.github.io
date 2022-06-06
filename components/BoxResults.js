import React from "react";
import { Flex } from "@chakra-ui/react";

const BoxResults = ({ children }) => {
    return (
        <Flex
            flex='1'
            bg='primaryGrey'
            borderRadius='8px'
            borderColor='secondaryGrey'
            borderWidth='1px'
            margin='16px'
            padding='10px'
            direction='column'
        >
            {children}
        </Flex>
    )
}

export default BoxResults;