import { Box } from "@mui/system";
import { Typography, Divider, TextField, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { footerData, creditcards } from "../src/constants/footer";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#020203",
        color: "#FFF",
      }}
    >
      <Box
        maxWidth={"xl"}
        sx={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          paddingTop: "40px",
          paddingX: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography variant="h4">Sign Up To Our Newsletter.</Typography>
            <Typography>
              Be the first to hear about the latest offers.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            <TextField
              size="small"
              label="Your Email"
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              variant="filled"
              sx={{
                border: "2px solid #FFF",
                borderRadius: "4px",
                input: { color: "#FFF", width: "300px" },
              }}
            />
            <Button
              sx={{
                backgroundColor: "#0156ff",
                color: "#FFF",
                paddingX: "40px",
                paddingY: "10px",
                borderRadius: "35px",
                ":hover": { backgroundColor: "blue", transition: "0.6s" },
                marginLeft: "20px",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            marginY: 5,
            display: "flex",
            columnGap: "4em",
            flexWrap: "wrap",
          }}
        >
          {footerData.map((block) => (
            <Box>
              <Typography
                key={block.title}
                sx={{ marginBottom: 2, color: "#808081", fontSize: '14px' }}
              >
                {block.title}
              </Typography>
              <Box>
                {block.items.map((item, i) => (
                  <Typography key={i} sx={{fontSize: '14px'}}>{item}</Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Divider sx={{ borderColor: "#808081" }} />

        <Box
          sx={{
            marginY: "20px",
            display: "flex",
            justifyContent: "space-between",
            color: "#808081",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <FacebookIcon sx={{ marginRight: "10px" }} />
            <InstagramIcon />
          </Box>
          <Box sx={{ display: "flex", columnGap: "10px" }}>
            {creditcards.map(cc => (
              <Box key={cc.id} component={'img'} src={cc.imgUrl} sx={{height: '20px', backgroundColor: '#FFF', borderRadius: '4px', minWidth: '30px' }}></Box>
            ))}
          </Box>

          <Typography variant="caption">
            Copyright © 2020 Shop Pty. Ltd.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
