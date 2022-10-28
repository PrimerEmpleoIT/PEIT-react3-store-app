import React from 'react'
import Img from '../public/img/1Custom.png'
import { Box } from '@mui/material';
import Image from 'next/image'
interface  TImageCard {
    name: string,
    img: string,
    url: string,
  }

  const Styles = {
    paperContainer: {
        height:350,
        backgroundImage: `url("../public/img/1Custom.png")`,
    }
  };
  
  



const ImageCard = ({img,name,url}:TImageCard) => {
  return (
    <div>
        
        <Box sx={{
            position:'absolute',
            zIndex:1
        }}>
            <Image 
                src={Img} 
                alt={name} 
                width={250} 
                height={350} 
                style={{
                    position:'absolute',                
                }}/>
        </Box>

        <Box sx={{
            color:'black',
            zIndex:3
        }}>
            <div>{img}</div>
            <div>{name}</div>
            <div>{url}</div>
        </Box>
        
    </div>
  )
}

export default ImageCard