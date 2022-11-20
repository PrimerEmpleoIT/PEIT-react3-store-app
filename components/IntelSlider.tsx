import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const IntelSlider = () => {
  const isNotSmallerScreen = useMediaQuery("(min-width:900px)");

  return (
    <Box
      flexDirection={isNotSmallerScreen ? "row" : "column-reverse"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        width: "100vw",
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
            Outplay the
          </Typography>
          <Typography
            padding={isNotSmallerScreen ? "0 0 0 0" : "0 2rem 0 2rem"}
            sx={{ color: "white" }}
            variant={isNotSmallerScreen ? "h2" : "h3"}
          >
            Competition
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
      <Box
        component={"img"}
        width={isNotSmallerScreen ? "50%" : "100%"}
        src={
          "https://images10.newegg.com/BizIntell/item/83/152/83-152-747/MSI%20Gaming%20Desktop-Aegis%20R-b3.jpg"
        }
        sx={{ backgroundColor: "black" }}
      ></Box>
    </Box>
  );
};
export default IntelSlider;
