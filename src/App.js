import { Box, createTheme, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import AnimatedCharacterBackground from "./AnimatedCharacterBackground";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skillss from "./components/Skills";
import ScroolToTop from "./components/ScroolToTop";
import Contact from "./components/Contact";
import Services from "./components/Services";

const theme = createTheme({
  typography: {
    fontFamily: "Courier Prime, monospace",
    allVariants: {
      color: "#fff", // Set the default text color to white for all Typography components
    },
  },
});

function App() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; 
  }, []);
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
        <div id="top">
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
              <Services />
              <Experience />
              <Projects />
              <Contact />
              {scrolling && <ScroolToTop />}
              
            </Box>
          </Box>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
