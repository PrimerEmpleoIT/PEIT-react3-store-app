import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";

const Hero4 = () => {
  const isNotSmallerScreen = useMediaQuery("(min-width:900px)");

  return (
    <Box
      flexDirection={isNotSmallerScreen ? "row" : "column-reverse"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <Box
        component={"img"}
        width={isNotSmallerScreen ? "50%" : "100%"}
        src={"https://m.media-amazon.com/images/I/4122DXx8nEL._AC_.jpg"}
        sx={{ backgroundColor: "white" }}
      ></Box>
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          width: "50%",
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          height: "681px",
        }}
      >
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            backgroundColor: "white",
            justifyContent: "start",
            alignItems: "start",
            maxWidth: "436px",
            paddingBottom: "2em",
          }}
        >
          <ChatBubbleRoundedIcon></ChatBubbleRoundedIcon>
          <Typography
            variant={isNotSmallerScreen ? "h2" : "h3"}
            padding={isNotSmallerScreen ? "0 0 0 0" : "0 2rem 0 2rem"}
            sx={{ color: "black" }}
          >
            The Highest Quality of Products
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
            We guarantee the highest quality of the products we sell. Several
            decades of successful operation and millions of happy customers let
            us feel certain about that. Besides, all items we sell pass thorough
            quality control, so no characteristics mismatch can escape the eye
            of our professionals.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Hero4;
