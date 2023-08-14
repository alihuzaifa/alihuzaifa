import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Grey } from "../utils/constants";
import GradientBox from "./GradientBox";
import MotionLayout from "./MotionLayout";
import Robot from "./Robot";
import cv from "../assets/Yomna_Salah_Software_Developer.pdf";
const Home = () => {
  return (
    <MotionLayout>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box pt={{ xs: 15, md: 20 }} width={{ xs: "100%", md: "60%" }}>
          <Typography variant="h3" fontWeight="bold">
            Hi there, I'm <span style={{ color: "#d2b9f0" }}>ALI HUZAIFA </span>
          </Typography>
          <Typography fontSize={16} mt={4} color={Grey}>
          Developer who has passion for web technolgies. Always ready to learn new technologies and to work on them ☀️.
          </Typography>
        </Box>
        <Box height="60vh" width={{ xs: "100%", md: "40%" }}>
          <Robot />
        </Box>
      </Stack>
    </MotionLayout>
  );
};

export default Home;
