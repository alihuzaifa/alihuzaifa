import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Grey, WorkingExperience, useResponsiveFont } from "../utils/constants";
import GradientBox from "./GradientBox";
import MotionLayout from "./MotionLayout";

const Experience = () => {
  return (
    <div id="experience">
      <MotionLayout>
        <Stack pt={10} id="Experience">
          <Typography fontWeight="bold" variant="h4">
            Working Experience
          </Typography>
          <Stack mt={4} gap={2} width={{ xs: "100%", md: "80%" }}>
            {WorkingExperience.map((ex) => (
              <Stack key={ex.title} direction="row" gap={2}>
                <Box>
                  <GradientBox
                    customStyle={{ height: 15, width: 15, mt: 2 }}
                    borderRadius="50%"
                  />
                  <Box
                    sx={{
                      borderRight: "2px solid #ccc", // Add a right border to create the divider effect
                      height: { xs: "25rem", md: "14rem" },
                      width: "6px",
                      mt: 0.5,
                    }}
                  />
                </Box>
                <Box
                  p={2}
                  sx={{ borderRadius: 2, backgroundColor: "rgba(0,0,0, 0.2)" }}
                >
                  <Typography fontSize={useResponsiveFont ? 16 : 14}>{ex.date}</Typography>
                  <Typography fontSize={useResponsiveFont ? 16 : 14}>{ex.title}</Typography>
                  <Typography fontSize={useResponsiveFont ? 14 : 10} color={Grey}>
                    {ex.place}
                  </Typography>
                  <Box mt={1}>
                    {ex.description.map((d) => (
                      <Typography key={d} fontSize={useResponsiveFont ? 16 : 14}>{d}</Typography>
                    ))}
                  </Box>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </MotionLayout>
    </div>
  );
};

export default Experience;
