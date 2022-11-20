import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
interface TImageCard {
  name: string;
  img: string;
  url: string;
}

const ImageCard = ({ img, name, url }: TImageCard) => {
  const isMobile = useMediaQuery("(min-width:500px)");
  return (
    <Box
      position="relative"
      width={{
        xs: "calc(100vw - 30px)",
        tablet: "229px",
      }}
      height={{ xs: "82px", tablet: "346px" }}
    >
      <Box
        component={"img"}
        src={img}
        position="absolute"
        width={{
          xs: "calc(100vw - 30px)",
          tablet: "229px",
        }}
        height={{ xs: "82px", tablet: "346px" }}
        sx={{
          objectFit: "cover",
        }}
      />
      <Box
        position="absolute"
        color="#FFF"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        top="0"
        left="0"
        right="0"
        bottom="0"
        gap="8px"
        width="100%"
      >
        <Typography fontSize="18px" fontWeight="700">
          {name}
        </Typography>
        <Link href={url}>
          <Typography sx={{ textDecoration: "underline" }} fontSize="12px">
            See All Products
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default ImageCard;
