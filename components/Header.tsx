import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Box, { BoxProps } from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';

export const Header = () => {
  const isNotSmallerScreen = useMediaQuery("(min-width:900px)");
  return (
    <Box 
      sx={{
        fontWeight: "600",
        fontSize: "12px",
        backgroundColor: "#020202",
        width: "100%",
        color: "#FFF",
      }}
    >
      <Box
        flexDirection={isNotSmallerScreen ? 'row' : 'column'}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "lg",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Mon-Thu: 9:00 AM - 5:30 PM
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#ACACAC",
            }}
          >
            Visit our showroom in 1234 Street Adress City Address, 1234
          </Box>
          <Box
            sx={{
              padding: "0.5em",
              display: "flex",
              textDecoration: "underline",
              lineHeight: "18px",
              alignItems: "center",
            }}
          >
            Contact Us
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Call Us: (00) 1234 5678
          <InstagramIcon
            sx={{ height: "15.45px", marginLeft: "0.1em" }}
          ></InstagramIcon>
          <FacebookIcon
            sx={{ height: "15.45px", marginLeft: "0.1em" }}
          ></FacebookIcon>
        </Box>
      </Box>
    </Box>
  );
};
