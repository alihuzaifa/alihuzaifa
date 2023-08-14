import { Box } from "@mui/material";
import React from "react";

const GradientBox = ({ customStyle, borderRadius, noHover, children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      {...customStyle}
      sx={{
        borderRadius: borderRadius ?? 2,
        backgroundImage: "linear-gradient(135deg, #e96cb8, #8167f8)",
        cursor: "pointer",
        transition: "transform 0.2s",
        "&:hover": noHover ? {} : {
          transform: "scale(1.1)",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default GradientBox;
