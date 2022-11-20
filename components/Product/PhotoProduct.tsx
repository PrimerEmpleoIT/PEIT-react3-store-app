import { Box } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ZypComponent from "../ZypComponent";

export default function PhotoProduct(props: any) {
  return (
    <Box
      sx={{
        maxWidth: "100vw",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          position: "relative",
        }}
      >
        <FavoriteBorderIcon
          sx={{
            cursor: "pointer",
            position: "absolute",
            left: "0",
            top: "0",
            color: "grey",
          }}
          fontSize="large"
        />
        <BarChartIcon
          sx={{
            color: "grey",
            cursor: "pointer",
            position: "absolute",
            left: "0",
            top: "2rem",
          }}
          fontSize="large"
        />
        <MailOutlineIcon
          sx={{
            color: "grey",
            cursor: "pointer",
            position: "absolute",
            left: "0",
            top: "4rem",
          }}
          fontSize="large"
        />
        <Box
          component={"img"}
          src={props.url}
          sx={{ minWidth: "120px", maxWidth: "250px", margin: "auto" }}
        ></Box>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <ZypComponent />
      </Box>
    </Box>
  );
}
