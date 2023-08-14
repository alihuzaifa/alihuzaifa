// import { Box, Popover, Stack, Typography, useMediaQuery } from "@mui/material";
// import React, { useState } from "react";
// import GradientBox from "./GradientBox";
// import MenuIcon from "@mui/icons-material/Menu";

// const Navbar = () => {
//   const items = ["About", "Experience", "Projects", "Contact"];
//   const isMedium = useMediaQuery("(max-width: 900px)");

//   const [isPopoverOpen, setPopoverOpen] = useState(false);

//   const handlePopoverOpen = () => {
//     setPopoverOpen(true);
//   };

//   const handlePopoverClose = () => {
//     setPopoverOpen(false);
//   };
//   return (
//     <Stack
//       direction="row"
//       position="fixed"
//       alignItems="center"
//       gap={isMedium ? "74vw" : "45vw"}
//       sx={{ zIndex: 2 }}
//     >
//       {/* <Typography variant="h6" fontWeight="bold">
//         ALI HUZAIFA
//       </Typography> */}
//       <Box component="img" src="/logo.png" height={45} width={45} />
//       <Stack direction="row" display={{ xs: "none", md: "flex" }} gap={2}>
//         {items.map((i) => (
//           <GradientBox key={i} customStyle={{ height: "2rem", width: "6rem" }}>
//             <a href={`#${i}`}>
//               <Typography fontSize={12}>
//                 {i}
//               </Typography>
//             </a>
//           </GradientBox>
//         ))}
//       </Stack>
//       <MenuIcon
//         onClick={handlePopoverOpen}
//         sx={{ color: "white", display: { xs: "flex", md: "none" } }}
//       />
//       <Popover
//         open={isPopoverOpen}
//         onClose={handlePopoverClose}
//         anchorReference="anchorPosition"
//         anchorPosition={{ top: 50, left: 200 }}
//         PaperProps={{
//           sx: {
//             backgroundColor: "black",
//           },
//         }}
//       >
//         {/* Your popover content goes here */}
//         <Box p={2} sx={{ borderRadius: 4 }}>
//           {items.map((i) => (
//             <Box key={i} onClick={handlePopoverClose}>
//               <a href={`#${i}`}>
//                 <Typography fontSize={14} mt={1}>
//                   {i}
//                 </Typography>
//               </a>
//             </Box>
//           ))}
//         </Box>
//       </Popover>
//     </Stack>
//   );
// };

// export default Navbar;
// import { Box, Popover, Stack, Typography, useMediaQuery } from "@mui/material";
// import React, { useState } from "react";
// import GradientBox from "../components/GradientBox";
// import MenuIcon from "@mui/icons-material/Menu";

// const Navbar = () => {
//     const items = ["About", "Experience", "Projects", "Contact"];
//     const isMedium = useMediaQuery("(max-width: 900px)");
//     const [isPopoverOpen, setPopoverOpen] = useState(false);
//     const handlePopoverOpen = () => {
//         setPopoverOpen(true);
//     };
//     const handlePopoverClose = () => {
//         setPopoverOpen(false);
//     };
//     return (
//         <Stack
//             direction="row"
//             position="fixed"
//             alignItems="center"
//             gap={isMedium ? "74vw" : "45vw"}
//             sx={{ zIndex: 2 }}
//         >
//             <Box component="img" src="/logo.png" height={45} width={45} />
//             <Stack direction="row" display={{ xs: "none", md: "flex" }} gap={2}>
//                 {items.map((i) => (
//                     <GradientBox key={i} customStyle={{ height: "2rem", width: "6rem" }}>
//                         <a href={`#${i}`}>
//                             <Typography fontSize={12}>
//                                 {i}
//                             </Typography>
//                         </a>
//                     </GradientBox>
//                 ))}
//             </Stack>
//             <MenuIcon
//                 onClick={handlePopoverOpen}
//                 sx={{ color: "white", display: { xs: "flex", md: "none" } }}
//             />
//             <Popover
//                 open={isPopoverOpen}
//                 onClose={handlePopoverClose}
//                 anchorReference="anchorPosition"
//                 anchorPosition={{ top: 50, left: 200 }}
//                 PaperProps={{
//                     sx: {
//                         backgroundColor: "black",
//                     },
//                 }}
//             >
//                 <Box p={2} sx={{ borderRadius: 4 }}>
//                     {items.map((i) => (
//                         <Box key={i} onClick={handlePopoverClose}>
//                             <a href={`#${i}`}>
//                                 <Typography fontSize={14} mt={1}>
//                                     {i}
//                                 </Typography>
//                             </a>
//                         </Box>
//                     ))}
//                 </Box>
//             </Popover>
//         </Stack>
//     );
// };

// export default Navbar;
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography } from "@mui/material";
function NavBar() {
  const [click, setClick] = React.useState(false);
  const Close = () => setClick(false);
  return (
    <Box>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar">
        <div className="nav-container">
          <div exact to="/" className="nav-logo">
            ALI HUZAIFA
          </div>
          <div className={'nav-menu'}>
            <div className="nav-item" onClick={() => {
            }}>
              <Typography fontSize={18} mt={0.5} color={'#fff'} style={{ cursor: 'pointer' }}>
                HOME
              </Typography>
            </div>
            <div className="nav-item" onClick={() => {
              console.log('Hello')

            }}>
              <Typography fontSize={18} mt={0.5} color={'#fff'} style={{ cursor: 'pointer' }}>
                ABOUT
              </Typography>
            </div>
            <div className="nav-item" onClick={() => {

            }}>
              <Typography fontSize={18} mt={0.5} color={'#fff'} style={{ cursor: 'pointer' }}>
                EXPERIENCE
              </Typography>
            </div>
            <div className="nav-item" onClick={() => {
              console.log("Hello")
            }}>
              <Typography fontSize={18} mt={0.5} color={'#fff'} style={{ cursor: 'pointer' }}>
                PROJECTS
              </Typography>
            </div>
          </div>
          <div className="nav-icon" onClick={() => {
            // click ? handleClick() : null
          }}>
            {click ? <CloseIcon fontSize="20px" /> : <MenuIcon fontSize="20px" />}
          </div>
        </div>
      </nav>
    </ Box>
  );
}

export default NavBar