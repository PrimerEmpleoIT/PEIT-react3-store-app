/* import Hero from "../components/Hero"; */
import { Box } from "@mui/system";
import Sponsors from "../components/Sponsors";
import NewProductsSlider from "../components/slider";
import TypeProducts from "../components/TypeProducts";
import NavProducts from "../components/NavProducts";
import HeroCarousel from "../components/HeroCarousel";

const IndexPage = () => {
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

      <NewProductsSlider />

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
