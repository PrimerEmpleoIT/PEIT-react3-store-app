import * as React from 'react';
import { Box } from "@mui/material";
import ListItems from './ListItems';





export default function Menu(props:any){

    return(<Box display={props.menu?'flex':'none'} component={"nav"} sx={{
            width: '70%',
            position: 'absolute',
            zIndex: '999',
            transition: 'all 1s ease',
            flexDirection: 'column',
            backgroundColor: '#FFFFFF',
            padding: '.2rem',
            top: '3rem'
        }} >
        <ListItems/>
    </Box>)
}