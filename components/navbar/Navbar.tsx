import React, { useState } from "react";
import {
  Box,
  Button,
  useMediaQuery,
  Typography,
  MenuItem,
  Menu,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import AppbarMobile from "./AppbarMobile";
import MenuAccount from "./MenuAccount";
import Cart from "./Cart";

export default function Navbar() {
  const [viewInput, setViewInput] = useState(false);
  const isNotSmallerScreen = useMediaQuery("(min-width:989px)");
  const brokenWords = useMediaQuery("(max-width:1200px)");
  const [anchorElemAccount, setAnchorElemAccount] =
    useState<null | HTMLElement>(null);
  const [anchorElemCart, setAnchorElemCart] = useState<null | HTMLElement>(
    null
  );

  const openAccount = Boolean(anchorElemAccount);
  const openCart = Boolean(anchorElemCart);

  const onHandleAccount = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElemAccount(event.currentTarget);
  };

  const onHandleCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElemCart(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElemAccount(null);
    setAnchorElemCart(null);
  };
  const handleClickOpenInput = () => {
    setViewInput(!viewInput);
  };

  return (
    <Box
      sx={{
        maxWidth: "1398px",
        minWidth: "100%",
        display: "flex",
        height: "56px",
      }}
    >
      {isNotSmallerScreen ? (
        <Box
          sx={{
            maxWidth: "1398px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <StoreIcon htmlColor="#0156FF" fontSize="large" />
          {viewInput ? (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "auto",
              }}
            >
              <input
                style={{
                  minWidth: "700px",
                  padding: ".5rem",
                  borderRadius: "25px",
                }}
                placeholder="Search entiere store here..."
              />
              <SearchIcon onClick={handleClickOpenInput} fontSize="medium" />
              <CloseIcon fontSize="medium" htmlColor="#0156FF" />
            </Box>
          ) : (
            <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
              <Box
                component={"ul"}
                sx={{
                  color: "black",
                  display: "flex",
                  listStyle: "none",
                  alignItems: "center",
                }}
              >
                <li>
                  <Link href={"/"}>
                    <Typography
                      fontSize={brokenWords ? "10px" : "14px"}
                      component={"b"}
                      style={{
                        color: "black",
                        marginRight: "10px",
                        textDecoration: "none",
                        fontWeight: "600",
                        lineHeight: "21px",
                      }}
                    >
                      Laptops
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <Typography
                      fontSize={brokenWords ? "10px" : "14px"}
                      component={"b"}
                      style={{
                        color: "black",
                        marginRight: "10px",
                        textDecoration: "none",
                        fontWeight: "600",
                        lineHeight: "21px",
                      }}
                    >
                      Desktop PCs
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <Typography
                      fontSize={brokenWords ? "10px" : "14px"}
                      component={"b"}
                      style={{
                        color: "black",
                        marginRight: "10px",
                        textDecoration: "none",
                        fontWeight: "600",
                        lineHeight: "21px",
                      }}
                    >
                      Networking Devices
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <Typography
                      fontSize={brokenWords ? "10px" : "14px"}
                      component={"b"}
                      style={{
                        color: "black",
                        marginRight: "10px",
                        textDecoration: "none",
                        fontWeight: "600",
                        lineHeight: "21px",
                      }}
                    >
                      Printers & Scanners
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <Typography
                      fontSize={brokenWords ? "10px" : "14px"}
                      component={"b"}
                      style={{
                        color: "black",
                        marginRight: "10px",
                        textDecoration: "none",
                        fontWeight: "600",
                        lineHeight: "21px",
                      }}
                    >
                      PC parts
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <Typography
                      fontSize={brokenWords ? "10px" : "14px"}
                      component={"b"}
                      style={{
                        color: "black",
                        marginRight: "10px",
                        textDecoration: "none",
                        fontWeight: "600",
                        lineHeight: "21px",
                      }}
                    >
                      All Other Products
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <Typography
                      fontSize={brokenWords ? "10px" : "14px"}
                      component={"b"}
                      style={{
                        color: "black",
                        marginRight: "10px",
                        textDecoration: "none",
                        fontWeight: "600",
                        lineHeight: "21px",
                      }}
                    >
                      Repairs
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <Typography
                      fontSize={brokenWords ? "10px" : "14px"}
                      component={"b"}
                      style={{
                        color: "black",
                        marginRight: "10px",
                        textDecoration: "none",
                        fontWeight: "600",
                        lineHeight: "21px",
                      }}
                    >
                      Laptops
                    </Typography>
                  </Link>
                </li>
                <Button
                  variant="outlined"
                  sx={{ color: "#0156FF", marginRight: "3rem" }}
                >
                  Our Deals
                </Button>
              </Box>
              <SearchIcon onClick={handleClickOpenInput} fontSize="medium" />
            </Box>
          )}
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "2rem" }}
          >
            <Button
              id="basic-button"
              aria-controls={openCart ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openCart ? "true" : undefined}
              onClick={onHandleCart}
              sx={{ width: "2rem", color: "#000" }}
            >
              <LocalGroceryStoreIcon fontSize="medium" />
            </Button>

            <Button
              id="basic-button"
              aria-controls={openAccount ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openAccount ? "true" : undefined}
              onClick={onHandleAccount}
              sx={{ width: "2rem", color: "#000" }}
            >
              <AccountCircleIcon fontSize="medium" />
            </Button>
          </Box>
        </Box>
      ) : (
        <AppbarMobile />
      )}

      <MenuAccount
        anchorElemAccount={anchorElemAccount}
        openAccount={openAccount}
        handleClose={handleClose}
      />
      <Cart
        anchorElemCart={anchorElemCart}
        openCart={openCart}
        handleClose={handleClose}
      />
    </Box>
  );
}
