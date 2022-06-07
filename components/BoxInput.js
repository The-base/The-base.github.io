import React, { useState } from "react";
import { Flex, HStack, Text, Input, Button } from "@chakra-ui/react";

const BoxInput = ({ height, handleHeight, width, handleWidth, depth, handleDepth, handleFind, handleReset }) => {

    const inputContent = [
        {
            value: height,
            onChange: handleHeight,
        },
        {
            value: width,
            onChange: handleWidth,
        },
        {
            value: depth,
            onChange: handleDepth,
        },
    ]

    const buttonContent =  [
        {
            text: 'Find Box',
            mr: '16px',
            onClick: handleFind,
        },
        {
            text: 'Reset',
            mr: undefined,
            onClick: handleReset,
        },
    ]

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
            m='16px 40px'
            align='center'
        >
            <Text
                fontSize='16px'
                fontWeight='400'
                mr='16px'
            >
                Box Size
            </Text>
            <HStack spacing='8px' mr='32px'>
                {inputContent.map((input, i) => (
                    <Input
                    key={i}
                    value={input.value}
                    onChange={input.onChange}
                    {...inputProps} />
                ))}
            </HStack>
            {buttonContent.map((button, i) => (
            <Button 
            key={i}
            mr={button.mr}
            onClick={button.onClick}
            {...buttonProps}
            >
                {button.text}
            </Button>
            ))}
        </Flex>
    )
}

export default BoxInput;