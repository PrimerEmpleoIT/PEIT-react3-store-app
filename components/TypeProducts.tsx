
import { Container} from '@mui/system';
import {Typography, styled} from '@mui/material';

import ProductCard from './ProductCard';
import products from '../src/constants/products'
import ImageCard from './ImageCard'; 
import category from '../src/constants/category'




const TypeProducts = () => {
  /* const Text = styled(Typography)`

    font-weight: 700;
    font-size: 22px;
    line-height: 130%;

    
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
    :hover{

    }
    ` */
  

  return (

    <Container maxWidth="sm" sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      
      }}>
       

      <ImageCard name={category[0].name} img={category[0].img} url={category[0].url}/>
      
      {
        products.map((product, i)=>{
          return <ProductCard key={i} rate={product.rate} stock={product.stock} img={product.img} reviews={product.reviews}  title={product.title}  price={product.price}/>
        })
      }
    </Container>
  )
}

export default TypeProducts