import { useState } from "react";
import Link from "next/link";
import { Button, Box } from "@mui/material";
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
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  // let max = product.rate; // max tiene que ser la puntuacion del producto
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

  if (isHover) {
    return (
        <Box
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          /* style={{webkitBoxShadow:'0px 0px 10px 6px rgba(0,0,0,0.28)', 
          boxShadow:'0px 0px 10px 6px rgba(0,0,0,0.28)'}} */
          sx={{
            position: "relative",
            marginBottom: "1em",
            flexWrap: "wrap",
            padding: "0px 25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "235px",
          }}
        >
          <Link href={`/product/${product.id}`}>
            <Box sx={{cursor:'pointer'}}>
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
            }}
          >
            <FavoriteBorderRoundedIcon
              sx={{
                margin: "auto",
                color: "#A2A6B0",
              }}
            ></FavoriteBorderRoundedIcon>
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
            }}
          >
            <EqualizerIcon
              sx={{
                margin: "auto",
                color: "#A2A6B0",
              }}
            ></EqualizerIcon>
          </Box>
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
              alignSelf: "center",
            }}
          ></Box>
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
          <Box
            sx={{
              width: "185px",
              height: "65px",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            {product.title}
          </Box>
          <Box
            sx={{
              width: "184px",
              height: "75px",
              padding: "10px",
              alignItems: "center",
              display: "column",
            }}
          >
            <Box
              sx={{
                textDecorationLine: "line-through",
                color: "grey",
                fontWeight: "400",
                fontSize: "14px",
              }}
            >
              {`$ ${
                parseFloat(product.price) -
                Math.floor(parseFloat(product.price))
              }`}
            </Box>
            <Box
              sx={{
                textDecorationColor: "black",
              }}
            >
              {`$ ${parseFloat(product.price)}`}
            </Box>
          </Box>
          </Box>
          </Link>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "auto",
              width: "160.84px",
              height: "37px",
            }}
          >
            <Button
              sx={{
                color: "#0156FF",
                border: "2px solid #0156FF",
                borderRadius: "50px",
              }}
              onClick={() => cartStore.addProduct(product.id)}
              >
              <AddShoppingCartIcon
                sx={{ width: "18.72px", height: "16.67px" }}
                ></AddShoppingCartIcon>
              Add To Cart
            </Button>
          </Box>
        </Box>
    );
  } else {
    return (
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          marginBottom: "1em",
          flexWrap: "wrap",
          padding: "0px 25px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "235px",
        }}
      >
        <Box
          sx={{
            fontWeight: "400",
            fontSize: "10px",
            color: `${colorStyle}`,
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
            width: "150px",
            marginRight: "1em",
            alignSelf: "center",
          }}
        ></Box>
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
        <Box
          sx={{
            width: "185px",
            height: "65px",
            fontWeight: "400",
            fontSize: "14px",
          }}
        >
          {product.title}
        </Box>
        <Box
          sx={{
            width: "184px",
            height: "75px",
            padding: "10px",
            alignItems: "center",
            display: "column",
          }}
        >
          <Box
            sx={{
              textDecorationLine: "line-through",
              color: "grey",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            {`$ ${Math.floor(parseFloat(product.price) * 0.75)}`}
          </Box>
          <Box
            sx={{
              textDecorationColor: "black",
            }}
          >
            {`$ ${parseFloat(product.price)}`}
          </Box>
        </Box>
      </Box>
    );
  }
};

export default ProductCard;
