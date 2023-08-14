import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react'
import { useInView } from "react-intersection-observer";

const MotionStack = motion(Stack);

const MotionLayout = ({ children }) => {
    const [ref, inView] = useInView({
      triggerOnce: true, // Set triggerOnce to true to animate only once when in view
      threshold: 0.1, // Adjust the threshold value as needed
    });
  return (
    <MotionStack
      ref={ref} // Attach the ref to the MotionStack component
      mt={6}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Animate only when in view
      transition={{ duration: 2 }}
    >
      {children}
    </MotionStack>
  );
}

export default MotionLayout