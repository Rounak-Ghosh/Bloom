import "./App.css";
import Home from "./components/Home/Home";
//import Profile from "./pages/Profile/Profile";
import Landing from "./components/landing/Landing";
import Auth from './components/auth/Auth';
import Subscribe from './components/subscription/Subscribe';
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: "'Plus Jakarta Sans', 'sans-serif'",
  },
  palette: {
    mode: 'light',
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Box className="App">
        {/*<Box className="blur" style={{top: '-18%', right: '0'}}></Box>
        <Box className="blur" style={{top: '36%', left: '-12rem'}}></Box>
        <Home/>
        <Profile/>
        <Auth/> //done
        <Landing /> //done 
        <Subscribe /> //done */}
        <Home/>
      </Box>
    </ThemeProvider>
  );
}

export default App;