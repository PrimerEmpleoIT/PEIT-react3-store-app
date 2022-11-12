import React from "react";
import { Box, Divider, Menu, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { CustomBtn } from "../buttons";
import { ActionBtn } from "../buttons/Actions";

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

        <CustomBtn
          isPrimary
          handleOnClick={() => console.log("view or edit")}
          text="View or Edit Your Cart"
        />
        <Divider style={{ width: "100%" }} />
        <CartItem />
        <Divider style={{ width: "100%" }} />
        <CartItem />
        <Divider style={{ width: "100%" }} />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="16px"
        >
          <Typography fontSize="14px">Subtotal:&nbsp;</Typography>
          <Typography fontSize="18px" fontWeight="600">
            $500.00
          </Typography>
        </Box>
        <CustomBtn
          isPrimary={false}
          handleOnClick={() => console.log("Go to Checkout")}
          text="Go to Checkout"
        />
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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap="6px"
      >
        <ActionBtn
          icon={<CloseIcon sx={{ fontSize: "18px" }} />}
          handleOnClick={() => console.log("remove")}
        />
        <ActionBtn
          icon={<EditIcon sx={{ fontSize: "14px" }} />}
          handleOnClick={() => console.log("edit")}
        />
      </Box>
    </Box>
  );
};
