import React from "react";
import { observer } from "mobx-react";
import { Box, Divider, Menu, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { CustomBtn } from "../buttons";
import { ActionBtn } from "../buttons/Actions";
import { useStores } from "../../store/root-store-context";
import { ProductType } from "../../src/types/products";

interface CartProps {
  anchorElemCart: null | HTMLElement;
  openCart: boolean;
  handleClose: () => void;
}

const Cart: React.FC<CartProps> = (props) => {
  const { cartStore, productsStore } = useStores();
  const { anchorElemCart, openCart, handleClose } = props;

  const products = productsStore.productsFromCart(cartStore.cart);

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
          {products.length} item{`${products.length > 1 ? "s" : ""}`} in cart
        </Typography>

        <CustomBtn
          isPrimary
          handleOnClick={() => console.log("view or edit")}
          text="View or Edit Your Cart"
        />
        <Divider style={{ width: "100%" }} />
        {products.map((product) => (
          <Box key={`cart-item-${product.id}`}>
            <CartItem
              product={product as ProductType}
              quantity={
                cartStore.cart.find((item) => item.productId === product.id)
                  ?.quantity || 0
              }
            />
            <Divider style={{ width: "100%" }} />
          </Box>
        ))}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="16px"
        >
          <Typography fontSize="14px">Subtotal:&nbsp;</Typography>
          <Typography fontSize="18px" fontWeight="600">
            $
            {products
              .filter((product) =>
                cartStore.cart.some((item) => item.productId === product.id)
              )
              .reduce((acc, product) => acc + parseFloat(product.price), 0)}
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

export default observer(Cart);

const CartItem: React.FC<{ product: ProductType; quantity: number }> = observer(
  ({ product, quantity }) => {
    const { cartStore } = useStores();

    return (
      <Box display="flex" alignItems="center" gap="10px" py="12px">
        <Typography fontSize="14px">{quantity}&nbsp;x</Typography>
        <Box
          component={"img"}
          src={product.images.split(",")[0]}
          sx={{
            width: "65px",
            alignSelf: "center",
          }}
        />
        <Box width="153px">
          <Typography fontSize="13px">
            {product.details.slice(0, 40)}...
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
            handleOnClick={() => cartStore.removeProduct(product.id)}
          />
          <ActionBtn
            icon={<EditIcon sx={{ fontSize: "14px" }} />}
            handleOnClick={() => console.log("edit")}
          />
        </Box>
      </Box>
    );
  }
);
