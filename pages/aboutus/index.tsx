import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Hero1 from "../../components/AboutUs/Hero1";
import Hero2 from "../../components/AboutUs/Hero2";
import Hero3 from "../../components/AboutUs/Hero3";
import Hero4 from "../../components/AboutUs/Hero4";
import Hero5 from "../../components/AboutUs/Hero5";

export default function indexAboutUs() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        maxWidth: "100%",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          width: "100%",
          paddingLeft: "9em",
        }}
      >
        Home › About Us
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: "left",
          width: "100%",
          paddingLeft: "3em",
          fontWeight: "bold",
        }}
      >
        About Us
      </Typography>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
    </Box>
  );
}
