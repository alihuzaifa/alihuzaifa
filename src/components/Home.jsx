import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Grey } from "../utils/constants";
import MotionLayout from "./MotionLayout";
import Robot from "./Robot";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
const Home = () => {
  return (
    <MotionLayout>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box pt={{ xs: 5, md: 10 }} width={{ xs: "100%", md: "60%" }}>
          <Typography variant="h3" fontWeight="bold">
            Hi there, I'm <span style={{ color: "#d2b9f0" }}>ALI HUZAIFA </span>
          </Typography>
          <Typography fontSize={16} color={Grey}>
            A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
          </Typography>
          <Box display="flex" gap={3} mt={2}>
            <a
              href="https://www.linkedin.com/in/huzaifa-ansari-959b65240/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                sx={{
                  color: "#0277b5",
                  transform: "scale(1.5)",
                  "&:hover": {
                    transform: "scale(1.6)",
                  },
                }}
              />
            </a>
            <a
              href="https://github.com/alihuzaifa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                sx={{
                  color: "#0277b5",
                  transform: "scale(1.5)",
                  "&:hover": {
                    transform: "scale(1.6)",
                  },
                }}
              />
            </a>
            <a href="mailto:ha4587323@gmail.com">
              <MailIcon
                sx={{
                  transform: "scale(1.5)",
                  "&:hover": {
                    transform: "scale(1.6)",
                  },
                }}
              />
            </a>
          </Box>
        </Box>
        <Box height="60vh" width={{ xs: "100%", md: "40%" }}>
          <Robot />
        </Box>
      </Stack>
    </MotionLayout>
  );
};

export default Home;
