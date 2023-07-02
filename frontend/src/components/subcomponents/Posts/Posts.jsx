import React, { useEffect } from "react";
import { Box } from "@mui/material";
import "./Posts.css";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { getTimelinePosts } from "../../../actions/PostAction";


function Posts() {
      const dispatch = useDispatch();
      const {user} = useSelector((state) => state.authReducer.authData);
      const { posts, loading } = useSelector((state) => state.postReducer);
      useEffect(() => {
            dispatch(getTimelinePosts(user._id))
      },[]);

      return (
            <Box className="Posts">
                  {loading
                  ?     "Fetching posts..."
                  :     posts.map((post, id)=>{
                        return <Post data={post} key={id} id={id}/>
                  })}
            </Box>
      );
}

export default Posts;