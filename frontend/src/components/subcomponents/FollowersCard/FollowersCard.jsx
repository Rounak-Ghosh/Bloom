import React from "react";
import "./FollowersCard.css";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { FollowersData } from "../Data/FollowersData";

function Followers({followers}) {
      return(
            <Box className="follower">
                  <Box className="nameField">
                        
                        <Avatar className="followerImage" alt="profile pic" src={followers.img} />
                        <Box className="name">
                        <span>{followers.name}</span>
                        <span>@{followers.username}</span>
                        </Box>
                  </Box>
                  <Button sx={{fontSize: "0.625rem"}} variant="contained" className="button">
                        Follow
                  </Button>
            </Box>
      )
}


function FollowersCard() {
      return (
      <Box className="followersCard">
            <Box className="heading">
                  <h2>Your connections</h2>
            </Box>
            {FollowersData. map((follower, id)=>{
                  return <Followers followers={follower} key={id} id={id}/>
            })}
      </Box>
      )
}

export default FollowersCard;