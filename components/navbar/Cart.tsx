import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";

interface CartProps {
  anchorElemCart: null | HTMLElement;
  openCart: boolean;
  handleClose: () => void;
}

const Cart: React.FC<CartProps> = (props) => {
  const { anchorElemCart, openCart, handleClose } = props;

  return (
    <Menu
      id="cart"
      anchorEl={anchorElemCart}
      open={openCart}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "cart-button",
      }}
    >
      <Box
        width="309px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography fontSize="18px">My Cart</Typography>
        <Typography fontSize="12px" color="#A2A6B0">
          2 item in cart
        </Typography>

        <Button
          sx={{
            backgroundColor: "#FFF",
            color: "#0156ff",
            borderRadius: "35px",
            border: "2px solid #0156ff",
            width: "250px",
            height: "37px",
            margin: "17.8px 0 20.23px 0",
            ":hover": {
              backgroundColor: "#0156ff",
              color: "#FFF",
              transition: "0.6s",
            },
          }}
          onClick={() => console.log("view or edit")}
        >
          View or Edit Your Cart
        </Button>
        <Divider style={{ width: "100%" }} />
        <CartItem />
        <Divider style={{ width: "100%" }} />
        <CartItem />
        <Divider style={{ width: "100%" }} />
      </Box>
    </Menu>
  );
};

export default Cart;

const CartItem: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" gap="10px" py="12px">
      <Typography fontSize="14px">1 x</Typography>
      <Box
        component={"img"}
        src="https://http2.mlstatic.com/D_NQ_NP_766983-MLA50118488854_052022-O.webp"
        sx={{
          width: "65px",
          alignSelf: "center",
        }}
      />
      <Box width="153px">
        <Typography fontSize="13px">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
        </Typography>
      </Box>
    </Box>
  );
};
