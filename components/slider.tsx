import React from "react";
import { observer } from "mobx-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ProductType } from "../src/types/products";
import { useStores } from "../store/root-store-context";

const NewProductsSlider: React.FC = () => {
  const { productsStore } = useStores();
  const mobile = useMediaQuery("(min-width:400px)");
  const tablet = useMediaQuery("(min-width:900px)");

  let responsiveWidth = 1400;
  if (!tablet && mobile) {
    responsiveWidth = 850;
  } else if (!mobile) {
    responsiveWidth = 390;
  } else if (tablet && mobile) {
    responsiveWidth = 1400;
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 390, min: 0 },
      items: 2,
    },
  };
  return (
    <Box maxWidth={responsiveWidth} sx={{ margin: "auto" }}>
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
        {productsStore.products.map((product) => (
          <ProductCard
            key={`product-slider-${product.id}`}
            product={product as ProductType}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default observer(NewProductsSlider);
