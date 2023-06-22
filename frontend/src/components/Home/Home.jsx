import React from "react";
import { Container, Stack } from "@mui/material";
import PostSide from "../../components/subcomponents/PostSide/PostSide";
import ProfileSide from "../../components/subcomponents/ProfileSide/ProfileSide";
import RightSide from "../../components/subcomponents/RightSide/RightSide";

function Home() {
      return (
            <Container>
                  <Stack direction="row" spacing={{ xs: 1, md: 2 }} justifyContent="space-between">
                        <ProfileSide/>
                        <PostSide/>
                        <RightSide/>
                  </Stack>
            </Container>
      );
}

export default Home;