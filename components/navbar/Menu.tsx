import * as React from 'react';
import { Box} from "@mui/material";
import ListItems from './ListItems';

export default function Menu(props:any){
    return(<Box component={"nav"} sx={{
        width: '70%',
        position: 'absolute',
        zIndex: '999',
        transition: 'all 1s ease',
        transform: 'translateX(-150%)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: '.2rem'
    }} className={props.className}>
        <ListItems/>
    </Box>)
}