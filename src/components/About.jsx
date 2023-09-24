import { Stack, Typography } from "@mui/material";
import React from "react";
import { Grey, useResponsiveFont } from "../utils/constants";
import MotionLayout from "./MotionLayout";

const About = () => {
  return (
    <MotionLayout>
      <Stack pt={15} id="About" width={{ xs: "100%", md: "60%" }}>
        <Typography variant="h4" fontWeight="bold">
          About me
        </Typography>
        <Typography pt={2} color={Grey} fontSize={useResponsiveFont ? 16 : 14}>
          A passionate Full Stack Software Developer, Ali Huzaifa brings
          expertise in crafting dynamic Web and Mobile applications using
          JavaScript, React.js, Node.js, React Native, and a suite of other
          cutting-edge libraries and frameworks. With a strong foundation in
          code architecture and a flair for innovation, Ali transforms ideas
          into functional and visually appealing digital solutions. Let's
          collaborate and bring your projects to life with skill and enthusiasm!
        </Typography>
      </Stack>
    </MotionLayout>
  );
};

export default About;
