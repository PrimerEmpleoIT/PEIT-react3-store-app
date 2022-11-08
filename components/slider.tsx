import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import products from "../src/constants/products";
import { Box } from "@mui/material";

const NewProductsSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box sx={{ maxWidth: "1398px", margin: "auto" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            color: "#000000",
            alignItems: "center",
            paddingLeft: "1.5em",
            fontSize: "22px",
          }}
        >
          <strong> New Products</strong>
        </Box>
        <Box
          sx={{
            color: "#0156FF",
            textDecorationLine: "underline",
          }}
        >
          {" "}
          See all new products
        </Box>
      </Box>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            rate={product.rate}
            stock={product.stock}
            img={product.img}
            reviews={product.reviews}
            title={product.title}
            price={product.price}
          ></ProductCard>
        ))}
      </Carousel>
    </Box>
  );
};

export default NewProductsSlider;
