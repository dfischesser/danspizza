import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#631f08',
    },
    secondary: {
      main: '#084c63',
    },
    error: {
      main: '#951c22',
    },
    background: {
      default: 'white',
      paper: '#fcfcf0',
      account: '#f0f2e6'
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
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;