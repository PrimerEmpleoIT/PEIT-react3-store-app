import { Container} from '@mui/system';
import ProductCard from '../ProductCard';
import ImageCard from './ImageCard'; 
import typeProducts from '../../src/constants/typeProducts'
import NavProducts from './NavProducts'; 
import { Box } from '@mui/material';
import MuiTabs from './MuiTapbs';



const TypeProducts = (props:any) => {
    
    
    let typeItems:any = typeProducts[props.index];
    let allProducts = typeProducts[props.index].products;
    /* console.log(allProducts[1].specs) */
  return (
    <Box>
       
      {/* {
        allProducts[1].specs? <NavProducts in={(props.index) -1}  /> : null
      } */}
        
      

      
      <Container maxWidth="sm" sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'1rem'
      }}>
        
        <ImageCard name={typeItems.name} img={typeItems.img} url={typeItems.url}/>
        {
          allProducts[1].specs? <MuiTabs ind={(props.index) -1}  /> : null
        }

        {
          !allProducts[1].specs?
            allProducts.map((product, i)=>{
              if(i>=5 ) return false
              return <ProductCard key={i} rate={product.rate} stock={product.stock} img={product.img} reviews={product.reviews}  title={product.title}  price={product.price}/>                      
            }) : false
        }
      </Container>
    </Box>
  )
}

export default TypeProducts