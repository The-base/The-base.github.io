import React, { useState } from "react";
import { Flex, HStack, Text, Input, Button } from "@chakra-ui/react";

const BoxInput = ({ height, handleHeight, width, handleWidth, depth, handleDepth, handleFind, handleReset }) => {

    const inputProps = {
        placeholder: '___',
        borderColor: 'secondaryGrey',
        focusBorderColor: 'selectionBlue',
        bg: 'primaryGrey',
        _placeholder: {color: 'secondaryGrey'},
        width: '64px',
        height: '40px',
        textAlign: 'center',
    };

    const buttonProps = {
        bg: 'primaryPurple',
        color: 'white',
        fontSize: '16px',
        fontWeight: '400px',
        borderRadius: '8px',
        padding: '8px',
        _focus: {
            boxShadow:
              '0 0 1px 2px #336CFB',
          }
    };

    return (
        <Flex 
            margin='16px 40px'
            alignItems='center'
        >
            <Text
                fontSize='16px'
                fontWeight='400'
                marginRight='16px'
            >
                Box Size
            </Text>
            <HStack spacing='8px' marginRight='32px'>
                <Input
                    value={height}
                    onChange={handleHeight}
                    {...inputProps}
                />
                <Input
                    value={width}
                    onChange={handleWidth}
                    {...inputProps}
                />
                <Input
                    value={depth}
                    onChange={handleDepth}
                    {...inputProps}
                />
            </HStack>
            <Button 
                {...buttonProps}
                marginRight='16px'
                onClick={handleFind}
            >
                Find Box 
            </Button>
            <Button 
                {...buttonProps}
                onClick={handleReset}
            >
                Reset
            </Button>
        </Flex>
    )
}

export default BoxInput;