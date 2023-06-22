import React from "react";
import { Box } from "@mui/material";
import "./Post.css";
import Heart from '@mui/icons-material/Favorite';
import Comment from '@mui/icons-material/AddComment';
import Share from '@mui/icons-material/Share';
import NotLike from '@mui/icons-material/FavoriteBorder';

function Post({data}) {
      return (
            <Box className="Post">
                  <img src={data.img} alt="post pic" />
                  
                  <Box className="postReact">
                        {(data.liked) ? <Heart/> : <NotLike/>} 
                        <Comment/>
                        <Share/>
                  </Box>

                  <span style={{marginTop: "-0.4rem", fontSize: "0.625rem"}}>{data.likes} likes</span>

                  <Box className="detail">
                        <span><b>{data.name}</b></span>
                        <span> {data.desc}</span>
                  </Box>
            </Box>
      );
}

export default Post;