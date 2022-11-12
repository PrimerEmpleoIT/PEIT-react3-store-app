/* import Hero from "../components/Hero"; */
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Sponsors from "../components/Sponsors";
import NewProductsSlider from "../components/slider";
import TypeProducts from "../components/TypeProducts";
import NavProducts from "../components/NavProducts";
import HeroCarousel from "../components/HeroCarousel";
import { ProductType } from "../src/types/products";
import { productsApi } from "../src/services/productsApi";

const IndexPage = () => {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getCategoy = async () => {
    setLoading(true);
    const response = await productsApi.getProducts();
    setProducts(response);
    setLoading(false);
  };

  useEffect(() => {
    getCategoy();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
      }}
    >
      {/** <Hero></Hero> */}
      <HeroCarousel />

      {products && !loading && <NewProductsSlider products={products} />}

      <TypeProducts index={4} />
      <NavProducts in={0} />

      <TypeProducts index={5} />
      <NavProducts in={1} />

      <TypeProducts index={6} />

      <TypeProducts index={7} />

      <Sponsors />
    </Box>
  );
};

export default IndexPage;
