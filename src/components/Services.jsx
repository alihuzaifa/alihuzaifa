import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useResponsiveFont } from '../utils/constants'
import MotionLayout from './MotionLayout'

const Services = () => {
  return (
    <div id="services">
        <MotionLayout>
    <Typography fontWeight="bold" variant="h4" marginY={'10px'}>
            Services
          </Typography>
    <Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={4}>
    <Box p={2} sx={{ borderRadius: 2, backgroundColor: "rgba(0,0,0, 0.2)" }}>
      <Typography fontWeight="bold" variant="h5">
        Software Development
      </Typography>
      <Typography fontSize={useResponsiveFont ? 16 : 14} marginY={'5px'}>Software that builds businesses</Typography>
      <Typography fontSize={useResponsiveFont ? 16 : 14} marginY={'5px'}>Building Better Software: Our team makes affordable and efficient tech solutions. We're experts in software development and love solving problems to create great digital experiences.</Typography>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
  <Box p={2} sx={{ borderRadius: 2, backgroundColor: "rgba(0,0,0, 0.2)" }}>
      <Typography fontWeight="bold" variant="h5">
        Website Development
      </Typography>
      <Typography fontSize={useResponsiveFont ? 16 : 14} marginY={'5px'}>Affordable websites that works</Typography>
      <Typography fontSize={useResponsiveFont ? 16 : 14} marginY={'5px'}>Code N Coder: Experts in affordable web development, delivering top-notch white-label design services with modern technology for unbeatable quality and value.</Typography>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Box p={2} sx={{ borderRadius: 2, backgroundColor: "rgba(0,0,0, 0.2)" }}>
      <Typography fontWeight="bold" variant="h5">
        Mobile Applications
      </Typography>
      <Typography fontSize={useResponsiveFont ? 16 : 14} marginY={'5px'}>Our solution is your success</Typography>
      <Typography fontSize={useResponsiveFont ? 16 : 14} marginY={'5px'}>Manifest Sciences: Swift, cost-effective mobile success. We help create high-quality mobile products, staying within budget and giving your business a competitive edge.</Typography>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Box p={2} sx={{ borderRadius: 2, backgroundColor: "rgba(0,0,0, 0.2)" }}>
      <Typography fontWeight="bold" variant="h5">
        UI/UX Designing
      </Typography>
      <Typography fontSize={useResponsiveFont ? 16 : 14} marginY={'5px'}>It's how the world sees you!</Typography>
      <Typography fontSize={useResponsiveFont ? 16 : 14} marginY={'5px'}>Improving How Websites Work: We're experts in making websites better. We use techniques like eye tracking and prototyping to create user-friendly designs that deliver great results.</Typography>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Box p={2} sx={{ borderRadius: 2, backgroundColor: "rgba(0,0,0, 0.2)" }}>
      <Typography fontWeight="bold" variant="h5">
        Domain & Hosting
      </Typography>
      <Typography fontSize={useResponsiveFont ? 16 : 14} marginY={'5px'}>Affordable websites that works</Typography>
      <Typography fontSize={useResponsiveFont ? 16 : 14} marginY={'5px'}>Explore our domain services. Secure your unique web address effortlessly with our user-friendly solutions, helping you establish your online presence.</Typography>
    </Box>
  </Grid>
</Grid>
</MotionLayout>
    </div>
  
  )
}

export default Services
