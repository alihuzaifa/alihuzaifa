import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material"; // Import Box and useMediaQuery from Material-UI
const getRandomCharacter = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return characters[Math.floor(Math.random() * characters.length)];
};
const AnimatedCharacterBackground = () => {
  const [characters, setCharacters] = useState([]);
  const isMobile = useMediaQuery("(max-width: 600px)"); // Set the breakpoint for mobile screens
  useEffect(() => {
    const createCharacter = () => {
      const newCharacter = {
        character: getRandomCharacter(),
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        animationDuration: `${Math.random() * 4 + 2}s`,
      };
      setCharacters((prevCharacters) => [...prevCharacters, newCharacter]);
    };
    const totalCharacters = isMobile ? 50 : 200; // Reduce the number of characters for mobile
    for (let i = 0; i < totalCharacters; i++) {
      createCharacter();
    }
    const interval = setInterval(() => {
      setCharacters((prevCharacters) =>
        prevCharacters.map((char) => ({
          ...char,
          character: getRandomCharacter(),
        }))
      );
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, [isMobile]);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        width: "100%",
        height: "100%",
        overflowY: "auto",
        backgroundColor: "#000000",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
        zIndex: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1, backgroundImage:
            "linear-gradient(60deg, rgba(105, 105, 205, 0.3) 10%, rgba(72, 61, 139, 0) 70%, rgba(105, 105, 205, 0.4) 90%)",
          backgroundSize: "300% 300%", // Increase the background size to make the animation effect wider
          animation: "shine 2s linear infinite", // Keyframe animation for the shining light effect
          pointerEvents: "none", // Make sure the overlay doesn't interfere with mouse events
        }}
      />
      {characters.map((char, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            pointerEvents: "none",
            animation: "changeCharacter 2s infinite alternate",
            fontSize: "0.7rem",
            color: "rgba(168, 201, 255 , 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "20px",
            height: "20px",
            left: char.left,
            top: char.top,
            animationDuration: char.animationDuration,
          }}
        >
          {char.character}
        </div>
      ))}
    </Box>
  );
};
export default AnimatedCharacterBackground;