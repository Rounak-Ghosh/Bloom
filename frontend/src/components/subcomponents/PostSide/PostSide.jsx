import React from "react";
import { Box } from "@mui/material";
import "./PostSide.css";
import PostShare from "../PostShare/PostShare";
import Posts from "../Posts/Posts";

function PostSide() {
      return (
            <Box flex={7} className="postSide">
                  <PostShare/> 
                  <Posts/>
            </Box>
      );
}

export default PostSide;