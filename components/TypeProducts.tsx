import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import ImageCard from "./ImageCard";
import category from "../src/constants/category";
import { ProductType } from "../src/types/products";
import { useStores } from "../store/root-store-context";
import { observer } from "mobx-react";

interface TypeProductsProps {
  index: number;
}

const TypeProducts: React.FC<TypeProductsProps> = ({ index }) => {
  const { productsStore } = useStores();
  const products = productsStore.productsByCategory(index) as ProductType[];

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection={{
        xs: "column",
        tablet: "row",
      }}
      width="calc(100% - 30px)"
      my="20px"
    >
      <ImageCard
        name={category.find((item) => item.id === index)?.name || ""}
        img={category.find((item) => item.id === index)?.img || ""}
        url={category.find((item) => item.id === index)?.url || ""}
      />

      {products && (
        <Box
          gap={4}
          className="scrollable"
          width={{
            xs: "100%",
            tablet: "calc(100vw - 300px)",
          }}
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          margin="1rem"
          sx={{
            overflowX: "auto",
          }}
        >
          {products.slice(0, 20).map((product) => (
            <ProductCard key={`product-${product.id}`} product={product} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default observer(TypeProducts);
