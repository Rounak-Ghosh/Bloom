import React from "react";
import { Box, Stack } from "@mui/material";
import "./RightSide.css";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CommentIcon from '@mui/icons-material/ModeComment';
import FollowersCard from "../FollowersCard/FollowersCard";
import Badge from '@mui/material/Badge';
import Logo from "../../../img/logo.png";

function RightSide() {
      return (
            <Box flex={3} className="RightSide" sx={{display : {xs: "none", sm: "block"}}}>
                  <Box className="navIcons">
                        <HomeIcon />
                        <SettingsIcon />
                        <Badge badgeContent={1} color="secondary" variant="dot">
                              <NotificationsIcon />
                        </Badge>
                        <CommentIcon />
                  </Box>
                  <FollowersCard />
                  <Stack direction="row" sx={{mt: 5}} spacing={{ xs: 0}}>
                        <Box className="companyName">
                              <h1>BLOOM</h1>
                        </Box>
                        <img className="logo" src={Logo} alt="logo" />
                        <Box sx={{display: "flex", alignItems: "center", ml: 0}}>
                              <h6 style={{display: "flex", alignItems: "center", margin: 0, paddingLeft: 10}}>&#169; Rounak Ghosh</h6>
                        </Box>                        
                  </Stack>
            </Box>
      );
}

export default RightSide;