import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import { Grid } from '@mui/material';

export default function cardInstagram(props:any){
    return(
        <Grid item xs={12} sm={6} md={8} sx={{maxWidth:'235px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <img style={{width:'235px',height:'152px'}} src={props.card.image}></img>
                <Typography component={'p'} sx={{fontSize:'12px',fontWeight:'400',padding:'.2rem'}}>{props.card.new}</Typography>
                <Typography  component={'p'} sx={{color:'#A2A6B0',fontSize:'10px',fontWeight:'400'}}>{props.card.date}</Typography>
        </Grid>
    )
}