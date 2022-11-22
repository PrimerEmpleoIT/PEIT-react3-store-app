import Link from "next/link";
import { Button, Box, Typography } from "@mui/material";
import Star from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { ProductType } from "../src/types/products";
import { useStores } from "../store/root-store-context";

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const { cartStore } = useStores();

  let max = 3; // TODO: get rate
  let colorStyle = product.stock > 0 ? "#78A962" : "#C94D3F";
  let reviews = [];
  for (let i = 0; i < max; i++) {
    reviews.push(true);
  }
  max = 5 - max;
  for (let i = 0; i < max; i++) {
    reviews.push(false);
  }

  const onAddToCart = (productId: number) => {
    cartStore.addProduct(productId);
  };

  return (
    <Box
      sx={{
        cursor: "pointer",
        position: "relative",
        marginBottom: "1em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "190px",
        height: "390px",
      }}
    >
      <Box
        sx={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          border: "2px solid #A2A6B0",
          position: "absolute",
          color: "#A2A6B0",
          top: "5%",
          right: "10%",
          display: "flex",
          alignItems: "center",
          "&:hover": {
            border: "2px solid #db0b21",
          },
        }}
      >
        <FavoriteBorderRoundedIcon
          sx={{
            margin: "auto",
            color: "#A2A6B0",
            "&:hover": {
              color: "#db0b21",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          border: "2px solid #A2A6B0",
          position: "absolute",
          color: "#A2A6B0",
          top: "15%",
          right: "10%",
          display: "flex",
          alignItems: "center",
          "&:hover": {
            border: "2px solid #00bf3d",
          },
        }}
      >
        <EqualizerIcon
          sx={{
            margin: "auto",
            color: "#A2A6B0",
            "&:hover": {
              color: "#00bf3d",
            },
          }}
        ></EqualizerIcon>
      </Box>

      <Link href={`/product/${product.id}`}>
        <Box sx={{ cursor: "pointer" }}>
          <Box
            sx={{
              color: `${colorStyle}`,
              fontWeight: "400",
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
            }}
          >
            {product.stock > 0 ? (
              <>
                <CheckCircleIcon
                  sx={{ color: "#78A962", width: "15px", height: "15px" }}
                />{" "}
                In Stock
              </>
            ) : (
              <>
                <CallSharpIcon
                  sx={{ color: "red", width: "15px", height: "15px" }}
                />{" "}
                Check Avalaibility
              </>
            )}
          </Box>

          <Box
            component={"img"}
            src={product.images.split(",")[0]}
            sx={{
              marginRight: "1em",
              width: "150px",
              height: "150px",
              alignSelf: "center",
              objectFit: "contain",
            }}
          />

          <Box sx={{ display: "inline-flex", alignItems: "center" }}>
            {reviews.map((data, id) =>
              data ? (
                <Star
                  key={id}
                  sx={{ color: "orange", width: "13px", height: "13px" }}
                ></Star>
              ) : (
                <Star
                  key={id}
                  sx={{ color: "#CACDD8", width: "13px", height: "13px" }}
                ></Star>
              )
            )}
            <p style={{ paddingLeft: "15px" }}>reviews({reviews})</p>
          </Box>

          <Typography fontSize="14px" fontWeight="400">
            {product.title}
          </Typography>

          <Box width="100%" padding="10px">
            <Typography
              sx={{
                textDecorationColor: "black",
                position: "relative",
                width: "max-content",
                margin: "auto",
              }}
            >
              <Typography
                sx={{
                  textDecorationLine: "line-through",
                  color: "grey",
                  fontWeight: "400",
                  fontSize: "14px",
                  position: "absolute",
                  right: "-10px",
                  top: "-12px",
                }}
              >
                {`$ ${
                  parseFloat(product.price) -
                  Math.floor(parseFloat(product.price))
                }`}
              </Typography>
              {`$ ${parseFloat(product.price)}`}
            </Typography>
          </Box>
        </Box>
      </Link>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            color: "#0156FF",
            border: "2px solid #0156FF",
            borderRadius: "50px",
          }}
          onClick={() => onAddToCart(product.id)}
        >
          <AddShoppingCartIcon
            sx={{ width: "18.72px", height: "16.67px" }}
          ></AddShoppingCartIcon>
          Add To Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
