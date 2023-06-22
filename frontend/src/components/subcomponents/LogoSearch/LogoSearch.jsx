import React from "react";
import { Box, Stack } from "@mui/material";
import Logo from "../../../img/logo.png";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import "./LogoSearch.css"

function LogoSearch() {
      return (
            <Box sx={{mb: 2}}>
                  <Stack direction="row" spacing={{ xs: 1, md: 2 }} justifyContent="space-between">
                        <img src={Logo} alt="logo" style={{height: "50px"}} />
                        <Box className="search">
                              <input className="searchInput" type="text" placeholder="Search" />
                              <Box className="searchIcon"><SearchSharpIcon/></Box>
                        </Box>
                        
                  </Stack>
            </Box>
      )
}

export default LogoSearch;