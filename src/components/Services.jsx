import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useResponsiveFont } from '../utils/constants'
import MotionLayout from './MotionLayout'

const ServiceBox = ({title,subtitle,text}) => {
  return  <Grid item xs={12} sm={6} md={4}>
  <Box p={2} sx={{ borderRadius: 2, backgroundColor: "rgba(0,0,0, 0.2)" }}>
    <Typography fontWeight="bold" variant="h5">
      {title}
    </Typography>
    <Typography fontSize={useResponsiveFont ? 16 : 14} marginY={'5px'}>{subtitle}</Typography>
    <Typography fontSize={useResponsiveFont ? 16 : 14} marginY={'5px'}>{text}</Typography>
  </Box>
</Grid>
}
const Services = () => {
  return (
    <div id="services">
        <MotionLayout>
    <Typography fontWeight="bold" variant="h4" marginY={'10px'}>
            Services
          </Typography>
    <Grid container spacing={2}>
      <ServiceBox title={'Software Development'} subtitle={'Software that builds businesses'} text={`Building Better Software: I make affordable and efficient tech solutions. I am expert in software development and love solving problems to create great digital experiences.`} />
      <ServiceBox title={'Website Development'} subtitle={'Affordable websites that works'} text={`Code N Coder: Experts in affordable web development, delivering top-notch white-label design services with modern technology for unbeatable quality and value.`} />
      <ServiceBox title={'Mobile Applications'} subtitle={'Our solution is your success'} text={`Manifest Sciences: Swift, cost-effective mobile success. I help create high-quality mobile products, staying within budget and giving your business a competitive edge.`} />
      <ServiceBox title={'UI/UX Designing'} subtitle={`It's how the world sees you!`} text={`Improving How Websites Work: I'm expert in making websites better. I use techniques like eye tracking and prototyping to create user-friendly designs that deliver great results.`} />
      <ServiceBox title={'Domain & Hosting'} subtitle={`Affordable websites that works`} text={`Explore our domain services. Secure your unique web address effortlessly with our user-friendly solutions, helping you establish your online presence.`} />
</Grid>
</MotionLayout>
    </div>
  
  )
}

export default Services
