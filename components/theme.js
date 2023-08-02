import { Roboto, Abril_Fatface } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  preload: true
});

export const abrilFatFace = Abril_Fatface({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  preload: true
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#631f08',
    },
    secondary: {
      main: '#ffdfb7',
    },
    error: {
      main: '#951c22',
    },
    info: {
      main: '#b2def1'
    },
    background: {
      default: 'white',
      paper: '#fcfcf0',
      light: '#fffce7',
      lightest: '#f6f6e7',
      grayish: '#e3e5e0',
      beige: '#fff3e2',
      beiger: '#ffdfb7',
      hover: '#712d0e',
      pink: '#f8e1e1',
      lightblue: '#d3f4ff'
    }
  },
  components: {
    Menu: {
      styleOverrides: {
        root: {
          backgroundColor: '#f6f6e7'
        }
      }
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  },
});

export default theme;