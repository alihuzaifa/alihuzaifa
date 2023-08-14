import { Box, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import AnimatedCharacterBackground from "./AnimatedCharacterBackground";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skillss from "./components/Skills";
import ScroolToTop from "./components/ScroolToTop";

const theme = createTheme({
  typography: {
    fontFamily: "Courier Prime, monospace",
    allVariants: {
      color: "#FFFFFF", // Set the default text color to white for all Typography components
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <AnimatedCharacterBackground />
        </Box>

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            minHeight: "100vh", // Add a minimum height to the content container to push content below the viewport
          }}
        >
          <Navbar />
          <Box px={{ xs: 2, md: 15 }} py={4}>
            <Home />
            <About />
            <Skillss />
            <Experience />
            <Projects />
            <ScroolToTop />
          </Box>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
