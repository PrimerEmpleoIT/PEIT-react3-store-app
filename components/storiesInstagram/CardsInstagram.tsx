import { Grid } from '@mui/material';
import * as React from 'react';
import newsInstagram from '../../src/constants/cardInstagram';
import CardInstagram from './CardInstagram';



export default function CardsInstagram(){

    return(
        <Grid sx={{minWidth:'100%'}} maxWidth={'1398px'} container spacing={2}  margin='0 auto'>
            <Grid item sm={12} md={6}>
                <img src='https://cdn.pixabay.com/photo/2017/04/24/15/25/robot-2256814_960_720.jpg' style={{maxWidth:'250px'}}></img>
            </Grid>
            <Grid item sm={12} md={6}>
                <img src='https://cdn.pixabay.com/photo/2017/04/24/15/25/robot-2256814_960_720.jpg' style={{maxWidth:'250px'}}></img>
            </Grid>
            <Grid item sm={12} md={6}>
                <img src='https://cdn.pixabay.com/photo/2017/04/24/15/25/robot-2256814_960_720.jpg' style={{maxWidth:'250px'}}></img>
            </Grid>
            <Grid item sm={12} md={6}>
                <img src='https://cdn.pixabay.com/photo/2017/04/24/15/25/robot-2256814_960_720.jpg' style={{maxWidth:'250px'}}></img>
            </Grid>
            <Grid item sm={12} md={6}>
                <img src='https://cdn.pixabay.com/photo/2017/04/24/15/25/robot-2256814_960_720.jpg' style={{maxWidth:'250px'}}></img>
            </Grid>
            <Grid item sm={12} md={6}>
                <img src='https://cdn.pixabay.com/photo/2017/04/24/15/25/robot-2256814_960_720.jpg' style={{maxWidth:'250px'}}></img>
            </Grid>
        </Grid>
    )    
}


/**
 * {newsInstagram.map((el,ind) => {
                if (ind > 11) return false;
                return <CardInstagram key={el.id} card={el}/>
            })}
 */