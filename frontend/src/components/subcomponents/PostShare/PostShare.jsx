import React, { useState, useRef } from "react";
import { Box, Stack } from "@mui/material";
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Profile from "../../../img/profile.png";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import "./PostShare.css";

function PostShare() {
      const [image, setImage] = useState(null);
      const imageRef = useRef();

      const onImageChange = (event) => {
            if (event.target.files && event.target.files[0]) {
                  let img = event.target.files[0];
                  setImage({
                        image: URL.createObjectURL(img),
                  });
            }
      };

      return (
            <Box className="postShare">
                  <Avatar className="miniAvatar" alt="profile pic" src={Profile} />
                  <Box className="postField">
                        <input className="poppingInput" type="text" placeholder="What's popping" />
                        <Box>
                              <Stack direction="row" spacing={{ xs: 1, md: 1 }} justifyContent="space-between">
                                    <Box className="postOptions" sx={{color: "#FC1818"}} onClick={()=>imageRef.current.click()}>
                                          <InsertPhotoIcon sx={{width: "50%"}}/>Photo
                                    </Box>
                                    <Box className="postOptions" sx={{color: "#4A4EB7"}}><PlayCircleIcon/>Video</Box>
                                    <Box className="postOptions" sx={{color: "#4CB256"}}><LocationOnIcon/>Location</Box>
                                    <Box className="postOptions" sx={{color: "#F3B64B"}}><CalendarMonthIcon/>Schedule</Box>
                                    <Button variant="contained" sx={{fontSize: "0.75rem"}} endIcon={<SendIcon sx={{width: "85%"}} />}>Send</Button>
                                    <Box sx={{display: "none"}}><input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/></Box>
                              </Stack>
                        </Box>
                        {image && (
                        <Box className="previewImage">
                              <CloseIcon className="closeIcon" onClick={()=>setImage(null)}/>
                              <img src={image.image} alt="" />
                              <Alert severity="info">Don't worry! Your photo will not be cropped 😇</Alert>
                        </Box>
                        )}
                  </Box>
            </Box>
      );
}

export default PostShare;