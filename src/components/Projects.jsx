import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Grey, Projectss, useResponsiveFont } from "../utils/constants";
import GradientBox from "./GradientBox";
import MotionLayout from "./MotionLayout";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
const Projects = () => {
  return (
    <div id="projects">
      <MotionLayout>
        <Stack pt={10} id="Projects">
          <Typography fontWeight="bold" variant="h4">
            Projects
          </Typography>
          <Typography
            mt={2}
            fontSize={useResponsiveFont ? 18 : 16}
            color={Grey}
            width={{ xs: "100%", md: "60%" }}
          >
            🌟 Take a look at the exciting projects in my portfolio that highlight my love for creative problem-solving. From building websites to cool mobile apps, these projects showcase my tech skills. And don't miss out on the startups and companies I've collaborated with to bring their tech ideas to reality. Let's dive into this awesome journey together! 🚀👨‍💻
          </Typography>
          <Stack gap={4}>
            {Projectss.map((p, index) => (
              <MotionLayout key={p.title}>
                {index === 0 && (
                  <Typography textAlign="center" variant="h4" my={4}>
                    WEB APPS
                  </Typography>
                )}
                {index === 3 && (
                  <Typography textAlign="center" variant="h4" my={4}>
                    MOBILE APPS
                  </Typography>
                )}
                <Stack
                  key={p.title}
                  direction={{ xs: "column", md: "row" }}
                  alignItems="center"
                  gap={4}
                >
                  <Box
                    component="img"
                    src={p.img}
                    alt={p.title}
                    width={{ xs: "100%", md: "40%" }}
                    sx={{
                      borderRadius: 2,
                      boxShadow: "0 0 0 2px #e96cb8, 0 0 0 2px #8167f8",
                    }}
                  />
                  <Box>
                    <Typography fontSize={useResponsiveFont ? 20 : 18} fontWeight="bold">
                      {p.title}
                    </Typography>
                    <Typography fontSize={useResponsiveFont ? 16 : 14} color={Grey}>
                      {p.subTitle}
                    </Typography>
                    <Stack mt={1} direction="row" gap={1}>
                      <Typography fontSize={useResponsiveFont ? 16 : 14}>Technologies:</Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {p.tech.map((t) => (
                          <Typography key={t.name} fontSize={useResponsiveFont ? 16 : 14} color={t.color}>
                            {t.name}
                          </Typography>
                        ))}
                      </Stack>
                    </Stack>

                    <Stack mt={2} direction="row" gap={2}>
                      <GradientBox
                        customStyle={{ width: { xs: "40%", md: "25%" }, py: 1 }}
                      >
                        <a
                          href={p.isApp ? p.appStore : p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Stack direction="row" alignItems="center" gap={1}>
                            {p.isApp ? (
                              <AppleIcon sx={{ fontSize: 20, color: "white" }} />
                            ) : (
                              <LinkIcon sx={{ fontSize: 20, color: "white" }} />
                            )}
                            <Typography fontSize={12}>
                              {p.isApp ? "App Store" : "Demo"}
                            </Typography>
                          </Stack>
                        </a>
                      </GradientBox>
                    </Stack>
                  </Box>
                </Stack>
              </MotionLayout>
            ))}
          </Stack>
        </Stack>
      </MotionLayout>
    </div>
  );
};
export default Projects;