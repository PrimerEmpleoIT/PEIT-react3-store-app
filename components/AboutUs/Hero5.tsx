import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
const Hero5 = () => {
  const isNotSmallerScreen = useMediaQuery("(min-width:900px)");

  return (
    <Box
      padding={isNotSmallerScreen ? "0" : "7em 0 0 0"}
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
        width={isNotSmallerScreen ? "50%" : "100vw"}
        sx={{
          flexDirection: "column",
          display: "flex",
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
            variant={isNotSmallerScreen ? "h3" : "h4"}
            padding={isNotSmallerScreen ? "0 0 0 0" : "0 2rem 0 2rem"}
            sx={{ color: "white" }}
          >
            Delivery to All Regions
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
            We deliver our goods all across Australia. No matter where you live,
            your order will be shipped in time and delivered right to your door
            or to any other location you have stated. The packages are handled
            with utmost care, so the ordered products will be handed to you safe
            and sound, just like you expect them to be.
          </Typography>
        </Box>
      </Box>
      <Box
        width={isNotSmallerScreen ? "50%" : "100vw"}
        sx={{ display: "flex", alignItems: "start", justifyContent: "start" }}
      >
        <Box
          width={isNotSmallerScreen ? "50%" : "100%"}
          component={"img"}
          src={
            "https://ocdn.eu/pulscms-transforms/1/oQQk9kqTURBXy84N2JmNDcxYWQwZTA5YTQ1MDFhZmQ3MDNiZTNhNWQ0My5qcGVnkpUDIADNA0TNAdaTBc0DFM0BvN4AAqEwBaExAA"
          }
          sx={{ backgroundColor: "black" }}
        ></Box>
      </Box>
    </Box>
  );
};
export default Hero5;
