import * as React from 'react';
import { useState } from 'react';

import { Box ,TextField,InputAdornment, useMediaQuery, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import InfoMenu from "./InfoMenu"
import ShopSharp  from '@mui/icons-material/ShopSharp';
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
                <LocalGroceryStoreIcon fontSize={"large"} sx={{flex: '1'}} htmlColor='#000000'/>
                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between',
                    flex:'8'
                }}>
                    {(visible) 
                    ? <input placeholder='Search here...' style={{width:'100%',padding:'.2rem',borderRadius:'25px'}}></input>
                    :<Box sx={{display:'flex',alignItems:'center'}}>
                        <nav style={{margin:'auto'}}>
                            <ul style={{display:'flex',listStyle:'none'}}>
                                <li>
                                    <Link  href={'/'}><Typography fontSize={isBiggerDesktop?'14px':'12px'} sx={{margin:'0  .3rem',cursor:'pointer'}} component={"a"}>Laptops</Typography></Link>
                                </li>
                                <li>
                                <Link  href={'/'}><Typography fontSize={isBiggerDesktop?'13px':'12px'} sx={{margin:'0  .3rem',cursor:'pointer'}} component={"a"}>Desktop PCs</Typography></Link>
                                </li>
                                <li>
                                <Link  href={'/'}><Typography fontSize={isBiggerDesktop?'14px':'12px'} sx={{margin:'0  .3rem',cursor:'pointer'}} component={"a"}>Networking Devices</Typography></Link>
                                </li>
                                <li>
                                <Link  href={'/'}><Typography fontSize={isBiggerDesktop?'14px':'12px'} sx={{margin:'0  .3rem',cursor:'pointer'}} component={"a"}>Printers & Scanners</Typography></Link>
                                </li>
                                <li>
                                <Link  href={'/'}><Typography fontSize={isBiggerDesktop?'14px':'12px'} sx={{margin:'0  .3rem',cursor:'pointer'}} component={"a"}>PC Parts</Typography></Link>
                                </li>
                                <li>
                                <Link  href={'/'}><Typography fontSize={isBiggerDesktop?'14px':'12px'} sx={{margin:'0  .3rem',cursor:'pointer'}} component={"a"}>All Other Products</Typography></Link>
                                </li>
                                <li>
                                <Link  href={'/'}><Typography fontSize={isBiggerDesktop?'14px':'12px'} sx={{margin:'0  .3rem',cursor:'pointer'}} component={"a"}>Repairs</Typography></Link>
                                </li>
                            </ul>
                        </nav>
                    </Box>}
                    <SearchIcon fontSize={"large"}  htmlColor='#000000' onClick={handleClickSearch}/>
                </Box>
                <Box sx={{
                    display: 'flex'
                }}>
                    <ShopSharp fontSize={"large"} sx={{flex: '1'}} htmlColor='#000000'/>
                    <AccountCircleIcon fontSize={"large"} sx={{flex: '1'}} htmlColor='#000000'/>
                </Box>
            </Box>
        </>
    )
}