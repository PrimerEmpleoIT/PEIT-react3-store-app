import Sponsors from "../components/Sponsors";
import NewProductsSlider from "../components/slider";
import TypeProducts from "../components/TypeProducts/TypeProducts";
import HeroCarousel from '../components/HeroCarousel';



const index = () => {
  return (
    <>
      <HeroCarousel />
      <NewProductsSlider />
      <TypeProducts index={0} />
      <TypeProducts index={1} /> 
      <TypeProducts index={2} /> 
      <TypeProducts index={3} /> 

      <Sponsors />
    </>
  );
};

export default index;
