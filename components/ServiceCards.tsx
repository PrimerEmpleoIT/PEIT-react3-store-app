import { Typography, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import React from "react";

const cardsServices = [
  {
    icon: SupportAgentRoundedIcon,
    title: "Product Support",
    description:
      "Up to 3 years on-site warranty available for your peace of mind",
  },
  {
    icon: AccountCircleRoundedIcon,
    title: "Personal Account",
    description:
      "With big discounts, free delivery and a dedicated support specialist",
  },
  {
    icon: LocalOfferRoundedIcon,
    title: "Amazing Savings",
    description: "Up to 70% off new Products,you can be sure of the best price",
  },
];

export default function ServiceCards() {
  const isBiggerTablet = useMediaQuery("(min-width:800px)");
  const isSmall = useMediaQuery("(max-width:500px)");

  return (
    <Box
      width={{
        xs: "calc(100% - 30px)",
      }}
      flexDirection={isSmall ? "column" : "row"}
      sx={{
        maxWidth: "1398px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      marginY="40px"
      gap="20px"
    >
      {cardsServices.map((card, index) => {
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: ".5rem",
            }}
            maxWidth="300px"
            key={`card-${index}`}
          >
            <Box>
              {React.createElement(card.icon, {
                sx: {
                  width: "3rem",
                  color: "white",
                  backgroundColor: "#0156FF",
                  borderRadius: "50%",
                  padding: ".5rem",
                  height: "3rem",
                  fontSize: "2rem",
                },
              })}
            </Box>
            <Typography component={"h3"}>
              <b>{card.title}</b>
            </Typography>
            <Typography
              sx={{ textAlign: "center", fontSize: "12px" }}
              component={"p"}
            >
              {card.description}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
