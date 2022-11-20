import React from 'react'
import { Box, useMediaQuery } from '@mui/material';
import Link from 'next/link';
interface  TImageCard {
    name: string,
    img: string,
    url: string,
  }


const ImageCard = ({img,name,url}:TImageCard) => {
  const isMobile = useMediaQuery("(min-width:500px)")
  return (
  
    <Box>
      <Box>
        <Box
            component={"img"}
            src={img}
            width={isMobile ? '233px':'345px' }
            height={isMobile ? '350px' : '82px'}
            sx={{ position:'absolute' }}
          >

            
          </Box>

        </Box>
        <Box 
          width={isMobile ? '233px':'345px' }
          height={isMobile ? '350px' : '82px'}
          sx={{
              zIndex:3,
              position:'relative', 
              color:'#ffffff',
              display:'flex',
              flexDirection:'column',
              /* width:'233px',
              height:'350px', */
              alignItems: 'center',
              textAlign: 'center',
              justifyContent:'space-between'
          }}>
            
            <Box 
              paddingTop={isMobile? '8rem': '-5px'}
              fontSize={isMobile? '30px': '18px'}
            sx={{
              fontWeight: '700',
              fontSize: '30px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent:'center',
              /* paddingTop:'8rem' */
              
             }}>{name}</Box>

            <Box 
            paddingBottom={isMobile? '2rem': '1rem'}
            fontSize={isMobile? '18px': '16px'}
            sx={{
              /* fontSize: '18px', */
              lineHeight: '100%',
              display: 'flex',
              textDecorationLine: 'underline',
              /* paddingBottom:'2rem' */
            }}>
              <Link href={url} >
                <a style={{color:'#ffffff'}}>See All Products</a>
              </Link>

            </Box>
      </Box>
        
    </Box>
  )
}

export default ImageCard