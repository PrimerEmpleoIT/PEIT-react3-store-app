/* import Hero from "../components/Hero"; */
import Sponsors from "../components/Sponsors";
import NewProductsSlider from "../components/slider";
import TypeProducts from "../components/TypeProducts";
import NavProducts from "../components/NavProducts";
import HeroCarousel from '../components/HeroCarousel';



const index = () => {
  return (
    <>
      {/* <Hero /> */}
      <HeroCarousel />
      
      <NewProductsSlider />

      <TypeProducts index={0}/>
      <NavProducts in={0}/>
      <TypeProducts index={1}/> 
      <NavProducts in={1}/>
      <TypeProducts index={2}/> 
      <TypeProducts index={3}/> 

      <Sponsors />
    </>
  );
};

export default index;
