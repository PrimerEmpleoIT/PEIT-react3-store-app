import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";

const Hero2 = () => {
  const isNotSmallerScreen = useMediaQuery("(min-width:900px)");

  return (
    <Box
      padding={isNotSmallerScreen ? "0" : "5em 0 0 0"}
      flexDirection={isNotSmallerScreen ? "row" : "column"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <Box
        width={isNotSmallerScreen ? "50%" : "100vw"}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          width={isNotSmallerScreen ? "50%" : "100%"}
          component={"img"}
          src={
            "https://24.lv/images/thumbnails/500/350/detailed/343/alienware-pro-gaming-keyboard-module-02.jpg"
          }
          sx={{ backgroundColor: "white" }}
        ></Box>
      </Box>
      <Box
        width={isNotSmallerScreen ? "50%" : "100%"}
        alignItems={isNotSmallerScreen ? "start" : "center"}
        sx={{
          flexDirection: "column",
          display: "flex",
          backgroundColor: "white",
          justifyContent: "center",
          height: "681px",
        }}
      >
        <Box
          maxWidth={isNotSmallerScreen ? "436px" : "100%"}
          alignItems={isNotSmallerScreen ? "start" : "center"}
          sx={{
            flexDirection: "column",
            display: "flex",
            backgroundColor: "white",
            justifyContent: "start",
            paddingBottom: "2em",
          }}
        >
          <ChatBubbleRoundedIcon></ChatBubbleRoundedIcon>
          <Typography
            variant={isNotSmallerScreen ? "h2" : "h3"}
            padding={isNotSmallerScreen ? "0 0 0 0" : "0 2rem 0 2rem"}
            sx={{ color: "black" }}
          >
            shop.com
          </Typography>
        </Box>
        <Box>
          <Typography
            padding={isNotSmallerScreen ? "0 0 0 0" : "0 2rem 0 2rem"}
            fontSize={isNotSmallerScreen ? "18px" : "15px"}
            sx={{
              color: "black",
              fontWeigth: "300",
              height: "196px",
              maxWidth: "436px",
            }}
          >
            Shop is a proudly Australian owned, Melbourne based supplier of I.T.
            goods and services, operating since 1991. Our client base
            encompasses individuals, small business, corporate and government
            organisations. We provide complete business IT solutions, centred on
            high quality hardware and exceptional customer service.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Hero2;
