import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";

const Hero3 = () => {
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
        }}
      >
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "start",
            height: "700px",
          }}
        >
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              backgroundColor: "black",
              justifyContent: "start",
              alignItems: "center",
              maxWidth: "100%",
              paddingBottom: "2em",
            }}
          >
            <Typography
              variant={isNotSmallerScreen ? "h3" : "h4"}
              padding={isNotSmallerScreen ? "0 0 0 0" : "0 2rem 0 2rem"}
              sx={{ color: "white" }}
            >
              You´re In Safe Hands
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
              and hardware at great prices to non-corporate customers, through
              our large Melbourne CBD showroom and our online store.
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
              Experience a 40% boost in computing from last generation. MSI
              Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
              upmost computing power to bring you an unparalleled gaming
              experience.
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
              *Performance compared to i7-9700. Specs varies by model.
            </Typography>
          </Box>
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
            "https://thermaltake-au.azureedge.net/media/catalog/product/cache/bd093b45df4312054ef694fa27ce31e9/db/imgs/pdt/gallery/CL-F038-PL14YL-A_4fadae79a1be490fabfc3ff69f63e5f0.jpg"
          }
          sx={{ backgroundColor: "black", height: "569,25px" }}
        ></Box>
      </Box>
    </Box>
  );
};
export default Hero3;
