import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Hero1 = () => {
  const isNotSmallerScreen = useMediaQuery("(min-width:900px)");

  return (
    <Box
      flexDirection={isNotSmallerScreen ? "row" : "column-reverse"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        width: "100%",
      }}
    >
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
            backgroundColor: "black",
            justifyContent: "start",
            alignItems: "start",
            maxWidth: "436px",
            paddingBottom: "2em",
          }}
        >
          <Typography
            variant={isNotSmallerScreen ? "h2" : "h3"}
            padding={isNotSmallerScreen ? "0 0 0 0" : "0 2rem 0 2rem"}
            sx={{ color: "white" }}
          >
            A Family That Keeps
          </Typography>
          <Typography
            padding={isNotSmallerScreen ? "0 0 0 0" : "0 2rem 0 2rem"}
            sx={{ color: "white" }}
            variant={isNotSmallerScreen ? "h2" : "h3"}
          >
            On Growing
          </Typography>
        </Box>
        <Box>
          <Typography
            padding={isNotSmallerScreen ? "0 0 0 0" : "0 2rem 0 2rem"}
            fontSize={isNotSmallerScreen ? "18px" : "15px"}
            sx={{
              color: "white",
              fontWeigth: "300",
              height: "196px",
              maxWidth: "436px",
            }}
          >
            We always aim to please the home market, supplying great computers
            and hardware at great prices to non-corporate customers, through our
            large Melbourne CBD showroom and our online store.
          </Typography>
          <Typography
            padding={isNotSmallerScreen ? "0 0 0 0" : "0 2rem 0 2rem"}
            width={isNotSmallerScreen ? "436px" : "380px"}
            fontSize={isNotSmallerScreen ? "18px" : "15px"}
            sx={{
              color: "white",
              fontWeigth: "300",
            }}
          >
            Shop management approach fosters a strong customer service focus in
            our staff. We prefer to cultivate long-term client relationships
            rather than achieve quick sales, demonstrated in the measure of our
            long-term success.
          </Typography>
        </Box>
      </Box>
      <Box
        component={"img"}
        width={isNotSmallerScreen ? "50%" : "100%"}
        src={
          "https://cdn.shopify.com/s/files/1/0351/8106/8420/files/IMG_0833_480x480.JPG?v=1601174168"
        }
        sx={{ backgroundColor: "black" }}
      ></Box>
    </Box>
  );
};
export default Hero1;
