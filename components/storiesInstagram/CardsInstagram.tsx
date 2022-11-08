import { Grid } from '@mui/material';
import * as React from 'react';
import newsInstagram from '../../src/constants/cardInstagram';
import CardInstagram from './CardInstagram';



export default function CardsInstagram(){

    return(
        <Grid sx={{width:'100%'}} maxWidth={'1398px'} container spacing={2} rowGap={'gap'} justifyContent='center' alignItems='center' margin='0 auto'>
            {newsInstagram.map((el,ind) => {
                if (ind > 11) return false;
                return <CardInstagram key={el.id} card={el}/>
            })}
        </Grid>
    )    
}


