import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Grey } from "../utils/constants";
import MotionLayout from "./MotionLayout";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import UserImage from "../assets/image.png";

const Contact = () => {
  return (
    <MotionLayout>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box pt={{ xs: 15, md: 20 }} width={{ xs: "100%", md: "80%" }}>
          <Typography fontWeight="bold" variant="h4">
            Reach Out to me!
          </Typography>
          <Typography mt={2} fontSize={14} color={Grey}>
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
          </Typography>
          <Typography mt={2} fontSize={14} color={Grey}>
            "I am a Student of Computer Science.I want to become a successful
            programmer and data scientist."
          </Typography>
          <Typography mt={2} fontSize={14} color={Grey}>
            Open for opportunities: Yes
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
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                  width: "50px",
                  height: "50px",
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
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                  width: "50px",
                  height: "50px",
                }}
              />
            </a>
            <a href="mailto:ha4587323@gmail.com">
              <MailIcon
                sx={{
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                  width: "50px",
                  height: "50px",
                }}
              />
            </a>
          </Box>
        </Box>
        <Box
          pt={{ xs: 15, md: 20 }}
          height="60vh"
          width={{ xs: "100%", md: "20%" }}
          textAlign={{ xs: "center", md: "start" }}
        >
          <img
            src={UserImage}
            alt="greet-image"
            style={{ width: "230px", height: "230px", borderRadius: "50%" }}
          />
        </Box>
      </Stack>
      <Typography mt={2} fontSize={14} color={Grey} textAlign={"center"}>
        Made with ❤️ by Yomna
      </Typography>
    </MotionLayout>
  );
};

export default Contact;
