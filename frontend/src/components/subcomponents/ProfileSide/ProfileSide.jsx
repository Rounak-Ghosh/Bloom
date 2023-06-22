import React from "react";
import { Box } from "@mui/material";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileSide.css"

function ProfileSide() {
      return (
            <Box className="profileSide" flex={2} sx={{display : {xs: "none", sm: "block"}}}>
                  <LogoSearch /> 
                  <ProfileCard />
            </Box>
      );
}

export default ProfileSide;