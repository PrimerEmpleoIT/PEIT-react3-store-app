import * as React from 'react';
import { useState } from 'react';

import { Container, Box } from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import NavbarComponents from './NavbarComponents';
import NavbarSearch from './NavbarSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Navbar(){
    const [visible,setVisible] = useState(false);

    const handleClickSearch = () =>{
        if (visible){
            setVisible(false)
        } else {
            setVisible(true)
        }
    }

    return(
        <Box component={"header"} sx={{
                margin: '0 auto',
                width: '80%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
            <StoreIcon fontSize="medium"/>
            {visible?<NavbarSearch handle={handleClickSearch} />: <NavbarComponents handle={handleClickSearch} />}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <ShoppingCartIcon fontSize='medium'/>
                <AccountCircleIcon fontSize='medium'/>
            </Box>
        </Box>
    )
}