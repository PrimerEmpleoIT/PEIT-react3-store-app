import * as React from 'react';
import { useState } from 'react';

import { Box, Container ,TextField,InputAdornment } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import InfoMenu from "./InfoMenu"

export default function Navbar(){
    const [visible,setVisible] = useState(false);
    const [seeMenu,setSeeMenu] = useState(false)
    const handleClickSearch = () =>{
        if (visible){
            setVisible(false)
        } else {
            setVisible(true)
        }
    }
    const handleClickMenu = () =>{
        if (seeMenu){
            setSeeMenu(false)
        } else{
            setSeeMenu(true)
        }
    }
    return(
        <Container sx={{
            backgroundColor: '#FFFFFF'
        }}>
            <Box sx={{
                    height: '3rem',
                    margin: '0 auto',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#0156FF'
                }}>
                    <MenuIcon onClick={handleClickMenu} htmlColor='#ffffff' sx={{
                        flex:'1',
                        cursor: 'pointer'
                    }}/>
                    <TextField  sx={{flex:'5',backgroundColor:'#FFFFFF',borderRadius:'25px',padding:'.1rem'}}
                        id="input-with-icon-textfield"
                        InputProps={{
                            disableUnderline:true,
                        startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
          ),
        }}
        variant="standard"
      />
                    <LocalGroceryStoreIcon htmlColor='#FFFFFF' sx={{
                        flex:'1'
                    }}/>
                    <AccountCircleIcon htmlColor='#FFFFFF' sx={{
                        flex:'1'
                    }}/>
                    
            </Box>
            <>
                <InfoMenu menu={seeMenu}/>
            </>
        </Container>
    )
}