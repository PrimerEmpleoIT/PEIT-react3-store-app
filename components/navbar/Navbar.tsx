import * as React from 'react';
import { useState } from 'react';
//import isNotSmallerScreen from "../../src/mediaqueries";
import {Box , Button, useMediaQuery,TextField} from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


export default function Navbar(){
    const [viewInput,setViewInput] = useState(false);
    const [input,setInput] = useState("")
    const isNotSmallerScreen = useMediaQuery("(min-width:900px)")

    const handleClickOpenInput = () =>{
        viewInput
        ?setViewInput(false)
        :setViewInput(true)
    }
    return(
        <Box sx={{height:'68px',maxWidth:'1398px',display:'flex'}}>
            {isNotSmallerScreen
            ?<Box sx={{maxWidth:'1398px',display:'flex',justifyContent:'space-between',alignItems:'center',margin:'0 auto'}}>
                <StoreIcon htmlColor='#0156FF' fontSize='large' />
                {viewInput
                ?<Box sx={{width:'100%',display: 'flex',alignItems:'center',justifyContent:'space-between',margin:'auto'}}>
                    <input style={{minWidth:'600px',padding:'.5rem',borderRadius:'25px'}} placeholder='Search entiere store here...'/>
                    <SearchIcon onClick={handleClickOpenInput} fontSize='medium'/>
                    <CloseIcon fontSize='medium' htmlColor='#0156FF'/>
                </Box>
                :<Box sx={{width:'100%',display:'flex',alignItems:'center'}}>
                    <Box component={"ul"} sx={{display:'flex',listStyle:'none',alignItems:'center'}}>
                        <li><Link href={'/'}><a style={{marginRight:'10px',textDecoration:'none',fontStyle: 'normal',fontWeight: '600',fontSize: '14px',lineHeight: '21px'}}>Laptops</a></Link></li>
                        <li><Link href={'/'}><a style={{marginRight:'10px',textDecoration:'none',fontStyle: 'normal',fontWeight: '600',fontSize: '14px',lineHeight: '21px'}}>Desktop PCs</a></Link></li>
                    <li><Link href={'/'}><a style={{marginRight:'10px',textDecoration:'none',fontStyle: 'normal',fontWeight: '600',fontSize: '14px',lineHeight: '21px'}}>Networking Devices</a></Link></li>
                        <li><Link href={'/'}><a style={{marginRight:'10px',textDecoration:'none',fontStyle: 'normal',fontWeight: '600',fontSize: '14px',lineHeight: '21px'}}>Printers & Scanners</a></Link></li>
                        <li><Link href={'/'}><a style={{marginRight:'10px',textDecoration:'none',fontStyle: 'normal',fontWeight: '600',fontSize: '14px',lineHeight: '21px'}}>PC parts</a></Link></li>
                        <li><Link href={'/'}><a style={{marginRight:'10px',textDecoration:'none',fontStyle: 'normal',fontWeight: '600',fontSize: '14px',lineHeight: '21px'}}>All Other Products</a></Link></li>
                        <li><Link href={'/'}><a style={{marginRight:'10px',textDecoration:'none',fontStyle: 'normal',fontWeight: '600',fontSize: '14px',lineHeight: '21px'}}>Repairs</a></Link></li>
                        <li><Link href={'/'}><a style={{marginRight:'10px',textDecoration:'none',fontStyle: 'normal',fontWeight: '600',fontSize: '14px',lineHeight: '21px'}}>Laptops</a></Link></li>
                        <Button variant="outlined" sx={{color:'#0156FF'}}>Our Deals</Button>
                    </Box>
                    <SearchIcon onClick={handleClickOpenInput} fontSize='medium'/>    
                </Box>}
                <Box sx={{display:'flex',alignItems:'center',marginLeft:'2rem'}}>
                    <LocalGroceryStoreIcon fontSize='medium'/>
                    <AccountCircleIcon fontSize='medium'/>
                </Box>
            </Box>
            :<Box></Box>}
        </Box>
    )
}