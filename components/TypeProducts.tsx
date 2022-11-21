import { useEffect, useState } from "react";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import ImageCard from "./ImageCard";
import category from "../src/constants/category";
import { ProductType } from "../src/types/products";
import { categoriesApi } from "../src/services/categoriesApi";
interface TypeProductsProps {
  index: number;
}

const TypeProducts: React.FC<TypeProductsProps> = ({ index }) => {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getCategoy = async () => {
    setLoading(true);
    const response = await categoriesApi.getCategoryById(index);
    setProducts(response.products);
    setLoading(false);
  };

  useEffect(() => {
    getCategoy();
  }, []);

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

      {loading && (
        <Box display="flex" justifyContent="center" width="100%">
          <CircularProgress />
        </Box>
      )}

      {products && !loading && (
        <Box
          gap={4}
          className="scrollable"
          width={{
            xs: "100%",
            tablet: "calc(100vw - 300px)",
          }}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            margin: "1rem",
            flexDirection: "row",
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

export default TypeProducts;
