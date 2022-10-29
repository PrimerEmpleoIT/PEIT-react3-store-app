import React from 'react'
import { Box } from '@mui/material';
import Link from 'next/link';
interface  TImageCard {
    name: string,
    img: string,
    url: string,
  }


const ImageCard = ({img,name,url}:TImageCard) => {
  return (
    <div>
        
        <Box sx={{
            position:'absolute',
            zIndex:1,
            
        }}>
            {/* <Image 
                src={img} 
                alt={name} 
                layout='fill'
                style={{
                    position:'absolute',                
                }}/>
              /* <div>{img}</div> */ }

        <Box
          component={"img"}
          src={img}
          sx={{ position:'absolute' }}
          />
        </Box>

        <Box sx={{
            zIndex:3,
            position:'relative', 
            color:'#ffffff',
            display:'flex',
            flexDirection:'column',
            width:'233px',
            height:'350px',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent:'space-between'
        }}>
            
            <Box sx={{
              fontWeight: '700',
              fontSize: '30px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent:'center',
              paddingTop:'8rem'
              
             }}>{name}</Box>

            <Box sx={{
              fontSize: '18px',
              lineHeight: '100%',
              display: 'flex',
              textDecorationLine: 'underline',
              paddingBottom:'2rem'
            }}>
              <Link href={url} >
                <a style={{color:'#ffffff'}}>See All Products</a>
              </Link>

            </Box>
        </Box>
        
    </div>
  )
}

export default ImageCard