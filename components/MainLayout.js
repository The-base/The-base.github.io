import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from './Header'

const MainLayout = ({ children }) => {
    return (
        <Flex 
            width='100vw' 
            height='100vh' 
            bg='white' 
            direction='column' 
            padding='10px 22px'
            alignItems='center'
        >
            <Header/>
            {children}
        </Flex>
    )
}

export default MainLayout;