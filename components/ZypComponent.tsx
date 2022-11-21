import React from "react";
import { Box } from "@mui/system";
import { Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";

const info = {
  img: "https://i.ibb.co/fxCrptZ/primary-zip.png",
  text: "own it now, up to 6 months interest free",
  url: "#",
};

const ZypComponent = () => {
  const isMobile = useMediaQuery("(min-width:500px)");
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", tablet: "row" }}
      alignItems="center"
      justifyContent="center"
      bgcolor="#F5F7FF"
      width={{
        xs: "calc(100% - 30px)",
        tablet: "calc(100% - 42px)",
        desktop: "100%",
      }}
      height="100%"
      padding="1rem"
      color="#272560"
    >
      <Box component={"img"} src={info.img} margin="1rem" />
      <Typography
        sx={{
          color: "#272560",
        }}
        textAlign="center"
      >
        <strong style={{ fontWeight: 600 }}>own</strong> it now, up to 6 months
        interest free
      </Typography>

      <Box
        sx={{
          lineHeight: "100%",
          display: "flex",
          textDecorationLine: "underline",
          color: "#272560",
          margin: "1rem",
        }}
      >
        <Link href={info.url}>
          <a
            style={{
              color: "#272560",
            }}
          >
            Learn More
          </a>
        </Link>
      </Box>
    </Box>
  );
};

export default ZypComponent;
