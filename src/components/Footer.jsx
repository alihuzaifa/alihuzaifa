import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
const Footer = () => {
  return (
    <Box
      id="Contact"
      component="footer"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={10}
      py={4}
      px={{ xs: 2, md: 10 }}
      sx={{ backgroundColor: "rgba(0,0,0,0.4)", color: "white" }}
    >
      <Box display="flex" alignItems="center">
        <Box
          component="img"
          src="/logo.png"
          alt="logo"
          height={30}
          width={30}
          mr={2}
        />
        <span>ALI HUZAIFA &copy; {new Date().getFullYear()}</span>
      </Box>

      <Box display="flex" gap={2}>
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
            }}
          />
        </a>
        <a href="mailto:ha4587323@gmail.com">
          <MailIcon
            sx={{
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
