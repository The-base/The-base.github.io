import React from "react";
import { Flex, Text, Button, Box } from "@chakra-ui/react";

const BoxEntry = ({ bg, price, name, height, width, depth, noBox }) => {
    const featureInputProps = {
        bg: 'white',
        color: '#000',
        padding: '8px 24px',
        fontSize: '14px',
        fontWeight: '400',
        marginRight: '8px',
        borderRadius: '8px',
        w: '100px',
        align: 'center',
        justifyContent: 'center',
    };

    const buttonProps = {
        borderRadius: '8px',
        padding: '8px 16px',
        alignItems: 'center',
        marginBottom: '10px',
        _hover: { bg: `${bg}` },
        _active: {
          bg: `${bg}`,
          transform: 'scale(1)',
          borderColor: `${bg}`,
        },
        _focus: {
          boxShadow:
            '0 0 0 0 #336CFB',
        },
    };

    return (
        <Button
            bg={bg}
            {...buttonProps}
        >
            <Flex>
                <Flex {...featureInputProps}>
                    {price}
                </Flex>
                <Flex {...featureInputProps}>
                    {name}
                </Flex>
                <Flex {...featureInputProps}>
                    {height}
                </Flex>
                <Flex {...featureInputProps}>
                    {width}
                </Flex>
                <Flex {...featureInputProps}>
                    {depth}
                </Flex>
            </Flex>

                <Text 
                fontSize='16px'
                fontWeight='400'
                marginLeft='32px'
                pr={noBox && '62px'}
                >
                {!noBox ? 'UPS Box' : ''}
            </Text>
        </Button>
    )
}

export default BoxEntry;