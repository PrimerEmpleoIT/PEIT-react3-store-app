import React from 'react'
import { Box } from "@mui/system";
import { Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { Padding } from '@mui/icons-material';

const info = {
  img:'https://i.ibb.co/fxCrptZ/primary-zip.png',
  text:'own it now, up to 6 months interest free',
  url:'#',
}

const ZypComponent = () => {
  const isMobile = useMediaQuery("(min-width:500px)")
  return (
    <Box
    flexDirection={isMobile? 'row': 'column'}
      width={isMobile? '72%' : '90%'}
      sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        background: '#F5F7FF',
        height:'100%',
        padding:'1rem',
        color:'#272560'
      }}
    >
        <Box
            component={"img"}
            src={info.img}
            sx={{
              margin:'1rem'
            }}
          />
        <Box><Typography>{info.text}</Typography></Box>
        
        <Box 
            sx={{
              /* fontSize: '18px', */
              lineHeight: '100%',
              display: 'flex',
              textDecorationLine: 'underline',
              color:'#272560',
              margin:'1rem'
              /* paddingBottom:'2rem' */
            }}>
              <Link href={info.url} >
                <a>Learn More</a>
              </Link>

            </Box>
        
    </Box>
  )
}

export default ZypComponent