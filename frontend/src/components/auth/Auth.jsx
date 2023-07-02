import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import "./Auth.css";
import Logo from "../../img/logo.png";
import { logIn, signUp } from "../../actions/AuthAction";

function Auth() {
      const dispatch = useDispatch();
      const loading = useSelector((state) => state.authReducer.loading);
      console.log(loading);
      const [isSignUp, setIsSignUp] = useState(false);
      const [data, setData] = useState({fullname: "", username: "", password: "", confirmpass: ""});

      const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value});
      };

      const [confirmPass, setConfirmPass] = useState(true);

      const handleSubmit = (event) => {
        event.preventDefault();
        
        if(isSignUp) {
          data.password===data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false);
        } else {
          dispatch(logIn(data));
        }
      };

      return (
        <Box className="auth">
          {/* Left Side */}
          <Box className="left">
                <img src={Logo} alt="logo" />
                <Box className="tagline">
                      <h1>BLOOM</h1>
                      <h6>Where your connections blossom</h6>
                </Box>
          </Box>

          {/* Right Side */}
          <Box className="right">
            <form className="infoForm authForm" onSubmit={handleSubmit}>
              <Box className="heading">
                <h1>{isSignUp ? "Create Account" : "Welcome Back"}</h1>
                <p className="subtitle">{isSignUp ? "Sign up to join the booming community" : "We've missed you! Please sign in to catch up asap"}</p>
              </Box>
              {isSignUp && (
                <Box>
                  <input required className="infoInput" name="fullname" type="text" placeholder="Enter your full name" onChange={handleChange}/>
                </Box>
              )}

              <Box>
                <input required className="infoInput" name="username" type="text"  placeholder="Enter your username" onChange={handleChange}/>
              </Box>

              <Box>
                <input required className="infoInput" name="password" type="password" placeholder="Password" onChange={handleChange}/>
              </Box>
              
              {isSignUp && (
                <Box>
                  <input required className="infoInput" name="confirmpass" type="password" placeholder="Confirm Password" onChange={handleChange}/>
                </Box>
              )}     
              <Box sx={{display: confirmPass? "none !important" : "block !important"}}>
                <Alert severity="error">Confirm Password is not matched</Alert>               
              </Box>
              
              <Box className="login-signup">
                  <button className="loginButton" type="submit" disabled={loading}>{isSignUp ? "Signup" : "Log in"}</button>
                  <p>{isSignUp ? "Already have an account?" : "Don't have an account?"}<a href="#" onClick={()=> setIsSignUp((prev)=>!prev)}>{isSignUp ? " Login " : " Signup now"}</a>!!</p>
              </Box>
            </form>
          </Box>
        </Box>
      );
}

export default Auth;