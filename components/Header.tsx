import * as React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        fontWeight: "600",
        fontSize: "12px",
        backgroundColor: "#020202",
        width: "100%",
        color: "#FFF",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        margin="0 15px"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              sx={{ color: "rgba(162, 166, 176, 1)" }}
              fontSize={{
                xs: "10px",
                tablet: "11px",
                desktop: "12px",
              }}
            >
              Mon-Thu:&nbsp;
            </Typography>
            <Typography
              sx={{ color: "white", marginLeft: ".1rem" }}
              fontSize={{
                xs: "10px",
                tablet: "11px",
                desktop: "12px",
              }}
            >
              9:00 AM - 5:30 PM
            </Typography>
          </Box>

          <IconButton
            sx={{
              cursor: "pointer",
              "&.MuiButton-root": { padding: 1, width: "15px" },
            }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <KeyboardArrowDownIcon fontSize="small" sx={{ color: "#FFF" }} />
          </IconButton>

          <Menu
            sx={{ width: "100vw" }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <AccessTimeIcon
                  color={"primary"}
                  sx={{ marginRight: ".3rem" }}
                  fontSize="large"
                />
                <Box>
                  <Typography>We are open:</Typography>
                  <Typography
                    sx={{ color: "rgba(162, 166, 176, 1)", fontSize: "13px" }}
                  >
                    Mon-Thu:
                  </Typography>
                  <Typography sx={{ color: "rgba(0, 0, 0, 1)" }}>
                    9:00 AM - 5:30 PM
                  </Typography>
                  <Box>
                    <Typography
                      sx={{ color: "rgba(162, 166, 176, 1)", fontSize: "13px" }}
                    >
                      Fr:{" "}
                    </Typography>
                    <Typography sx={{ color: "rgba(0, 0, 0, 1)" }}>
                      9:00 AM - 6:00 PM
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ color: "rgba(162, 166, 176, 1)", fontSize: "13px" }}
                    >
                      Sat:{" "}
                    </Typography>
                    <Typography sx={{ color: "rgba(0, 0, 0, 1)" }}>
                      11:00 AM - 5:00 PM
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </MenuItem>
            <hr />
            <MenuItem onClick={handleClose}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <LocationOnIcon
                  sx={{ marginRight: ".3rem" }}
                  color={"primary"}
                  fontSize={"large"}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ display: "flex", flexDirection: "column" }}
                    fontSize={"13px"}
                  >
                    Address: 1234 Street Adress,
                  </Typography>
                  <Typography
                    sx={{ display: "flex", flexDirection: "column" }}
                    fontSize={"13px"}
                  >
                    City Address, 1234
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
            <hr />
            <MenuItem onClick={handleClose}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "auto",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Typography fontSize={"14px"}>Phones:</Typography>
                  <Typography
                    fontSize={"14px"}
                    sx={{ color: "rgba(1, 86, 255, 1)", cursor: "pointer" }}
                  >
                    {" "}
                    (00) 1234 5678
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Typography fontSize={"14px"}>E-mail:</Typography>
                  <Typography
                    fontSize={"14px"}
                    sx={{ color: "rgba(1, 86, 255, 1)", cursor: "pointer" }}
                  >
                    shop@email.com
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
          </Menu>
        </Box>

        <Box display="flex" justifyContent="center" gap="10px">
          <Box
            display={{
              xs: "none",
              desktop: "flex",
            }}
          >
            <Typography
              color="#ACACAC"
              fontSize={{
                xs: "10px",
                tablet: "11px",
                desktop: "12px",
              }}
            >
              Visit our showroom in 1234 Street Adress City Address, 1234
            </Typography>
          </Box>
          <Box
            display={{
              xs: "none",
              tablet: "flex",
            }}
          >
            <Typography
              sx={{ textDecoration: "underline" }}
              fontSize={{
                xs: "10px",
                tablet: "11px",
                desktop: "12px",
              }}
              fontWeight={600}
            >
              Contact Us
            </Typography>
          </Box>
        </Box>

        <Box
          display={{
            xs: "flex",
            tablet: "none",
            desktop: "flex",
          }}
          alignItems="center"
        >
          <Typography
            fontWeight={600}
            fontSize={{
              xs: "10px",
              tablet: "11px",
              desktop: "12px",
            }}
          >
            Call Us: (00) 1234 5678
          </Typography>

          <Box
            display={{
              xs: "none",
              desktop: "flex",
            }}
          >
            <InstagramIcon
              sx={{ height: "15.45px", marginLeft: "0.1em" }}
            ></InstagramIcon>
            <FacebookIcon
              sx={{ height: "15.45px", marginLeft: "0.1em" }}
            ></FacebookIcon>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
