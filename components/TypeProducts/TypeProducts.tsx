import { Container} from '@mui/system';
import ProductCard from '../ProductCard';
import ImageCard from './ImageCard'; 
import typeProducts from '../../src/constants/typeProducts'
import NavProducts from './NavProducts';
import { Box } from '@mui/material';



const TypeProducts = (props:any) => {
  
    console.log(typeProducts[props.index].products)
  

  return (
    <Box>
      {/* <NavProducts in={0}/> */}
      
      <Container maxWidth="sm" sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'1rem'
        }}>
        
        
        <ImageCard name={typeProducts[props.index].name} img={typeProducts[props.index].img} url={typeProducts[props.index].url}/>
        
        {/* {
          products.map((product, i)=>{
            if(i>=5 ) return false
            return <ProductCard key={i} rate={product.rate} stock={product.stock} img={product.img} reviews={product.reviews}  title={product.title}  price={product.price}/>
          })

        } */}
        

        {
          typeProducts[props.index].products.map((product, i)=>{
            if(i>=5 ) return false
            return <ProductCard key={i} rate={product.rate} stock={product.stock} img={product.img} reviews={product.reviews}  title={product.title}  price={product.price}/>
                                    
          })
        }
      </Container>
    </Box>
  )
}

export default TypeProducts