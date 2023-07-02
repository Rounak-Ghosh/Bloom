import React, { useState } from "react";
import { Box } from "@mui/material";
import "./Post.css";
import Heart from '@mui/icons-material/Favorite';
import Comment from '@mui/icons-material/AddComment';
import Share from '@mui/icons-material/Share';
import NotLike from '@mui/icons-material/FavoriteBorder';
import { useSelector } from "react-redux";
import { likePost } from "../../../api/PostRequest";

function Post({data}) {
      const {user} = useSelector((state) => state.authReducer.authData);
      const [liked, setLiked] = useState(data.likes.includes(user._id));
      const [likes, setLikes] = useState(data.likes.length);

      const handleLike = () => {
            likePost(data._id, user._id);
            setLiked((prev) => !prev);
            liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
      }

      return (
            <Box className="Post">
                  <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />
                  
                  <Box className="postReact">
                        {liked? <Heart onClick={handleLike}/> : <NotLike onClick={handleLike}/>} 
                        <Comment/>
                        <Share/>
                  </Box>

                  <span style={{marginTop: "-0.4rem", fontSize: "0.625rem"}}>{likes} likes</span>

                  <Box className="detail">
                        <span><b>{data.name}</b></span>
                        <span> {data.desc}</span>
                  </Box>
            </Box>
      );
}

export default Post;