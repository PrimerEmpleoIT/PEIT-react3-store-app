import { Box } from "@mui/system";
import PaymentIcon from "@mui/icons-material/Payment";
import Button from "@mui/material/Button";
import { Typography, useMediaQuery } from "@mui/material";

export default function PayComponent(props: any) {
  const tablet = useMediaQuery("(min-width:768px)");

  return (
    <Box
      flexDirection={tablet ? "row-reverse" : "column"}
      sx={{ width: "100%", display: "flex" }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          marginTop: ".4rem",
          marginBottom: ".4rem",
        }}
        justifyContent={tablet ? "center" : "center"}
      >
        <input
          type="number"
          id="tentacles"
          name="tentacles"
          min="1"
          max="5"
          defaultValue={1}
        ></input>
        <Button sx={{ margin: "0 .5em" }} variant={"contained"}>
          Add to chart
        </Button>
        <Button variant={"contained"} startIcon={<PaymentIcon />}>
          PayPal
        </Button>
      </Box>
      <Typography sx={{ textAlign: "center" }}>
        On sale from <span style={{ fontWeight: "bold" }}>{props.price}</span>
      </Typography>
    </Box>
  );
}
