import { Box, Button, Stack } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ProductSupport() {
  const isNotSmallerScreen = useMediaQuery("(min-width:900px)");
  return (
    <Box
      sx={{
        Width: "100vw",
        display: "flex",
        position: "relative",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        width={isNotSmallerScreen ? "24em" : "12em"}
        left={isNotSmallerScreen ? "-12rem" : "10rem"}
        sx={{
          position: "absolute",
          justifyContent: "center",
          backgroundColor: "#F5F7FF",
        }}
        direction={"column"}
        spacing={1}
      >
        <Button
          sx={{ backgroundColor: "white" }}
          variant="outlined"
          endIcon={<ArrowRightAltIcon color={"primary"} fontSize={"medium"} />}
        >
          Product Support
        </Button>
        <Button
          sx={{ backgroundColor: "white" }}
          variant="outlined"
          endIcon={<ArrowRightAltIcon color={"primary"} fontSize={"medium"} />}
        >
          FAQ
        </Button>
        <Button
          sx={{ backgroundColor: "white" }}
          variant="outlined"
          endIcon={<ArrowRightAltIcon color={"primary"} fontSize={"medium"} />}
        >
          Our Buyer Guide
        </Button>
      </Stack>
      <Box
        sx={{ maxWidth: "656px" }}
        component={"img"}
        src={
          "https://www.mark-petrie.com/wp-content/uploads/2018/07/telefonos-asistencia-motivo-1.jpg"
        }
      ></Box>
    </Box>
  );
}
