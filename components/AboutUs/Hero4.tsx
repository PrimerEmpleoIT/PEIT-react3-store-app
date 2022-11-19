import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";

const Hero4 = () => {
  const isNotSmallerScreen = useMediaQuery("(min-width:900px)");

  return (
    <Box
      padding={isNotSmallerScreen ? "0" : "7em 0 0 0"}
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
          width={isNotSmallerScreen ? "50%" : "60%"}
          component={"img"}
          src={"https://m.media-amazon.com/images/I/4122DXx8nEL._AC_.jpg"}
          sx={{ backgroundColor: "white" }}
        ></Box>
      </Box>
      <Box
        width={isNotSmallerScreen ? "50%" : "100vw"}
        sx={{
          flexDirection: "column",
          display: "flex",

          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "start",
          height: "681px",
        }}
      >
        <Box
          width={isNotSmallerScreen ? "50%" : "100vw"}
          sx={{
            flexDirection: "column",
            display: "flex",
            backgroundColor: "white",
            justifyContent: "start",
            alignItems: "start",
            paddingBottom: "2em",
          }}
        >
          <Typography
            width={isNotSmallerScreen ? "50%" : "100vw"}
            variant={isNotSmallerScreen ? "h3" : "h4"}
            padding={isNotSmallerScreen ? "0 0 0 0" : "0 2rem 0 2rem"}
            sx={{ color: "black" }}
          >
            The Highest Quality of Products
          </Typography>
        </Box>
        <Box>
          <Typography
            width={isNotSmallerScreen ? "50%" : "100vw"}
            padding={isNotSmallerScreen ? "0 0 0 0" : "0 2rem 0 2rem"}
            fontSize={isNotSmallerScreen ? "18px" : "15px"}
            sx={{
              color: "black",
              fontWeigth: "300",
              height: "196px",
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
