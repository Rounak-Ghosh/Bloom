import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

function Auth() {
      return (
            <div className="auth">
                  <div className="left">
                        <img src={Logo} alt="logo" />
                        <div className="tagline">
                              <h1>BLOOM</h1>
                              <h6>Where your connections blossom</h6>
                        </div>
                  </div>
                  <SignUp />
            </div>
      );

      function LogIn() {
            return(
                  <div className="right">
                    <form className="infoForm authForm">
                      <div className="heading">
                        <h1>Welcome back</h1>
                        <p className="subtitle">We've missed you! Please sign in to catch up asap</p>
                      </div>
                      
                      <div>
                        <input className="infoInput" name="username" type="text" placeholder="Enter your username"/>
                      </div>
              
                      <div>
                        <input className="infoInput" name="password" type="password" placeholder="Enter your password"/>
                      </div>
                      
                      <div className="check-forgot">
                        <div className="l">
                          <input className="checkbox" type="checkbox" value="remember-me" id="flexCheckDefault"></input>
                          <label>Remember me</label>
                        </div>
                        <div className="r">
                        <label><a href="#">Forgot Password</a></label>
                        </div>
                      </div>

                      <div className="login-signup">
                        <button className="loginButton">Log in</button>
                        <p>Don't have an account? <a href="#">Sign up</a> now !!</p>
                      </div>
                    </form>
                  </div>
            );
      }

      function SignUp() {
            return (
                  <div className="right">
                    <form className="infoForm authForm">
                      <div className="heading">
                        <h1>Create Account</h1>
                        <p className="subtitle">Sign up to join the booming community</p>
                      </div>

                      <div>
                        <input className="infoInput" name="fullname" type="text" placeholder="Enter your full name"/>
                      </div>
      
                      <div>
                        <input type="text" className="infoInput" name="username" placeholder="Enter your username"/>
                      </div>
      
                      <div>
                        <input className="infoInput" name="password" type="text" placeholder="Password"/>
                      </div>
      
                      <div>
                        <input className="infoInput" name="confirmpass" type="text" placeholder="Confirm Password"/>
                      </div>

                      <div className="login-signup">
                          <button className="loginButton" type="submit">Signup</button>
                          <p>Already have an account? <a href="#">Login </a>!!</p>
                      </div>
                      
            </form>
          </div>
        );
      }
}

export default Auth;