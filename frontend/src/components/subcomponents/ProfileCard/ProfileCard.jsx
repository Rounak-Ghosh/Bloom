import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Cover from "../../../img/cover.png";
import Profile from "../../../img/profile.png";
import "./ProfileCard.css";
import { useDispatch } from "react-redux";
import { logOut } from "../../../actions/AuthAction";


function ProfileCard() {
      const dispatch = useDispatch();
      const handleLogout = () => {
            console.log("Logout!");
            console.log(logOut);
            dispatch(logOut()); //not working
      }

      return (
            <Box className="profileCard">
                  <Box className="profileImages">
                        <img src={Cover} alt="cover pic" />
                        <Avatar className="avatar" sx={{height: 96, width: 96}} alt="profile pic" src={Profile} />
                  </Box>
                  <Box className="profileName">
                        <span>Rounak Ghosh</span>
                        <span>Full Stack Developer</span>
                  </Box>
                  <Box className="followStats">
                        <hr />
                        <Box>
                              <Box className="follow">
                                    <span>86</span>
                                    <span>Followers</span> 
                              </Box>
                              <Box className="vl"></Box>
                              <Box className="follow">
                                    <span>12</span>
                                    <span>Following</span>
                              </Box>
                        </Box>
                  </Box>
                  <Typography className="logout" onClick={handleLogout} >Logout</Typography>
            </Box>
      );
}

export default ProfileCard;