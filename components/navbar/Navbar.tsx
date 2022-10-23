import * as React from 'react';
import { useState } from 'react';

import { Box ,TextField,InputAdornment, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import InfoMenu from "./InfoMenu"
import ShopSharp  from '@mui/icons-material/ShopSharp';
import Menu from './Menu';
import ListItems from './ListItems';
import Link from 'next/link';

export default function Navbar(){
    const isSmallerTablet = useMediaQuery("(min-width:810px)")
    const isBiggerDesktop = useMediaQuery("(min-width:1000px)")
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
        <>
            <Box
                display={
                    isSmallerTablet ? 'none':'flex'
                }
                sx={{
                    backgroundColor: '#FFFFFF',
                }}>
                <Box sx={{
                        height: '3rem',
                        margin: '0',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#0156FF',
                        width: '100%'
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
            </Box>
            <Box display={
                isSmallerTablet?'flex':'none'
            } sx={{
                alignItems:'center',
                justifyContent:'space-between',
                width:'100%',
                height:'3rem'
            }}>
                <LocalGroceryStoreIcon sx={{flex: '1'}} htmlColor='#000000'/>
                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between',
                    flex:'8'
                }}>
                    {(visible) 
                    ?<TextField sx={{alignItems:'center',}}></TextField>
                    :<Box sx={{display:'flex',alignItems:'center'}}>
                        <nav style={{margin:'auto'}}>
                            <ul style={{display:'flex',listStyle:'none'}}>
                                <li>
                                    <Link href={'/'} ><a style={{fontSize:'12px',margin:'0 .3rem'}}>Laptops</a></Link>
                                </li>
                                <li>
                                    <Link href={'/'}><a style={{fontSize:'12px',margin:'0 .3rem'}}>Desktop PCs</a></Link>
                                </li>
                                <li>
                                    <Link href={'/'}><a style={{fontSize:'12px',margin:'0 .3rem'}}>Networking Devices</a></Link>
                                </li>
                                <li>
                                    <Link href={'/'}><a style={{fontSize:'12px',margin:'0 .3rem'}}>Printers & Scanners</a></Link>
                                </li>
                                <li>
                                    <Link href={'/'}><a style={{fontSize:'12px',margin:'0 .3rem'}}>PC Parts</a></Link>
                                </li>
                                <li>
                                    <Link href={'/'}><a style={{fontSize:'12px',margin:'0 .3rem'}}>All Other Products</a></Link>
                                </li>
                                <li>
                                    <Link href={'/'} ><a style={{fontSize:'12px',margin:'0 .3rem'}}>Repairs</a></Link>
                                </li>
                            </ul>
                        </nav>
                    </Box>}
                    <SearchIcon  htmlColor='#000000' onClick={handleClickSearch}/>
                </Box>
                <Box sx={{
                    display: 'flex'
                }}>
                    <ShopSharp sx={{flex: '1'}} htmlColor='#000000'/>
                    <AccountCircleIcon sx={{flex: '1'}} htmlColor='#000000'/>
                </Box>
            </Box>
        </>
    )
}