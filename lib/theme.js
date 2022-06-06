import { extendTheme } from '@chakra-ui/react';


const theme = extendTheme({ 
    colors: {
        white: '#FFF',
        primaryGrey: '#F5F5F5',
        secondaryGrey: '#D0D5DD',
        primaryPurple: '#907CFF',
        selectionBlue: '#336CFB',
        secondaryBlue: '#E1EDFF',
        primaryRed: '#FF5959',
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