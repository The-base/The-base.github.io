import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({ 
    colors: {
        white: '#ffffff',
        gray: '#dddddd',
        primary: '#0070f3',
        secondary: '#ff3344',
    },

    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
    },

    fontWeights: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },

    components: {
        //if you want to override a component, you can do it here
    },

    styles: {
        body: {
            fontWeight: 'medium',
            fontSize: 'md',
            color: 'gray',
        }
    }
 })


export default theme;