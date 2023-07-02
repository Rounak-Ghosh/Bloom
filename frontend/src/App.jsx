import "./App.css";
import Home from "./components/Home/Home";
//import Profile from "./pages/Profile/Profile";
import Landing from "./components/landing/Landing";
import Auth from './components/auth/Auth';
import Subscribe from './components/subscription/Subscribe';
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";

const theme = createTheme({
      typography: {
      fontFamily: "'Plus Jakarta Sans', 'sans-serif'",
      },
      palette: {
      mode: 'light',
      }
});

function App() {
      const user = useSelector((state) => state.authReducer.authData);

      return (
      <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box className="App">
            {/*<Box className="blur" style={{top: '-18%', right: '0'}}></Box>
            <Box className="blur" style={{top: '36%', left: '-12rem'}}></Box> */}
            <Routes>
                  <Route path="/" element = {user? <Navigate to = "home" /> : <Navigate to = "auth" />} />
                  <Route path="/home" element = {user? <Home/> : <Navigate to="../auth"/>} />
                  <Route path="/auth" element = {user? <Home/> : <Auth/>} />
            </Routes>
            </Box>
      </ThemeProvider>
      );
}

export default App;