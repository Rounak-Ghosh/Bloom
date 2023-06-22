import React from "react";
import { Box } from "@mui/material";
import "./Posts.css";
import { PostsData } from "../Data/PostsData";
import Post from "../Post/Post";

function Posts() {
      return (
            <Box className="Posts">
                  {PostsData.map((post, id)=>{
                        return <Post data={post} key={id} id={id}/>
                  })}
            </Box>
      );
}

export default Posts;