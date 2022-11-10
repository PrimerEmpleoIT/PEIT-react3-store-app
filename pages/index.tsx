/* import Hero from "../components/Hero"; */
import Sponsors from "../components/Sponsors";
import NewProductsSlider from "../components/slider";
import TypeProducts from "../components/TypeProducts";
import NavProducts from "../components/NavProducts";
import HeroCarousel from '../components/HeroCarousel';
import Hero from '../components/Hero';

import { Box } from "@mui/system";



const index = () => {
  return (
    <Box
      sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:'100vw'
      }}
    >
      {/** <Hero></Hero> */}
      <HeroCarousel />
      
      <NewProductsSlider />

      <TypeProducts index={0}/>
      <NavProducts in={0}/>
      <TypeProducts index={1}/> 
      <NavProducts in={1}/>
      <TypeProducts index={2}/> 
      <TypeProducts index={3}/> 

      <Sponsors />
    </Box>
      
    
  );
};

export default index;
