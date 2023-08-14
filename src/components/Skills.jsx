import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import GradientBox from "./GradientBox";
import MotionLayout from "./MotionLayout";
import { Skillss } from "../utils/constants";

const Skills = () => {
  return (
    <MotionLayout>
      <Stack pt={10}>
        <Typography fontWeight="bold" variant="h4">
          Technologies
        </Typography>
        <Stack
          mt={4}
          direction="row"
          justifyContent={{ xs: "center"  , md: "start"}}
          flexWrap="wrap"
          gap={4}
        >
          {Skillss.map((skill) => (
            <Stack
              key={skill.name}
              justifyContent="center"
              gap={1}
              sx={{
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <GradientBox
                customStyle={{ height: 70, width: 70 }}
                borderRadius="50%"
                noHover
              >
                <Box component="img" src={skill.icon} height={40} width={40} />
              </GradientBox>
              <Typography textAlign="center" fontSize={10}>
                {skill.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </MotionLayout>
  );
};

export default Skills;
