import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0E1342',
    },
    secondary: {
      main: '#0066cc',
    },
  },
  typography: {
    fontFamily: `"Inter"`,
    h6: {
      fontWeight: 600,                
      fontSize: "22px",             
    },
    h4: {
      fontWeight: 600,
      fontSize: '32px'
    },
  },
});

export default theme;