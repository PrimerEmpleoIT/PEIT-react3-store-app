import * as React from 'react';
import { useState } from 'react';
//import isNotSmallerScreen from "../../src/mediaqueries";
import {Box , Button, useMediaQuery,TextField,Typography} from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import AppbarMobile from './AppbarMobile';



export default function Navbar(){
    const [viewInput,setViewInput] = useState(false);
    const [input,setInput] = useState("")
    const isNotSmallerScreen = useMediaQuery("(min-width:900px)")
    const brokenWords = useMediaQuery("(max-width:1130px)")

    const handleClickOpenInput = () =>{
        viewInput
        ?setViewInput(false)
        :setViewInput(true)
    }
    return(
        <Box sx={{maxWidth:'1398px',minWidth:'100%',display:'flex',height:'56px'}}>
            {isNotSmallerScreen
            ?<Box sx={{maxWidth:'1398px',display:'flex',justifyContent:'space-between',alignItems:'center',margin:'0 auto'}}>
                <StoreIcon htmlColor='#0156FF' fontSize='large' />
                {viewInput
                ?<Box sx={{width:'100%',display: 'flex',alignItems:'center',justifyContent:'space-between',margin:'auto'}}>
                    <input style={{minWidth:'700px',padding:'.5rem',borderRadius:'25px'}} placeholder='Search entiere store here...'/>
                    <SearchIcon onClick={handleClickOpenInput} fontSize='medium'/>
                    <CloseIcon fontSize='medium' htmlColor='#0156FF'/>
                </Box>
                :<Box sx={{width:'100%',display:'flex',alignItems:'center'}}>
                    <Box component={"ul"} sx={{color:'black',display:'flex',listStyle:'none',alignItems:'center'}}>
                        <li><Link  href={'/'} ><Typography fontSize={brokenWords?'10px':'14px'}  component={"b"}   style={{color:'black', marginRight:'10px',textDecoration:'none',fontWeight: '600',lineHeight: '21px'}}>Laptops</Typography></Link></li>
                        <li><Link href={'/'} ><Typography fontSize={brokenWords?'10px':'14px'}  component={"b"}   style={{color:'black',marginRight:'10px',textDecoration:'none',fontWeight: '600',lineHeight: '21px'}}>Desktop PCs</Typography></Link></li>
                        <li><Link href={'/'}><Typography  fontSize={brokenWords?'10px':'14px'}  component={"b"} style={{color:'black',marginRight:'10px',textDecoration:'none',fontWeight: '600',lineHeight: '21px'}}>Networking Devices</Typography></Link></li>
                        <li><Link href={'/'} ><Typography  fontSize={brokenWords?'10px':'14px'} component={"b"}   style={{color:'black',marginRight:'10px',textDecoration:'none',fontWeight: '600',lineHeight: '21px'}}>Printers & Scanners</Typography></Link></li>
                        <li><Link href={'/'} ><Typography  fontSize={brokenWords?'10px':'14px'} component={"b"}   style={{color:'black',marginRight:'10px',textDecoration:'none',fontWeight: '600',lineHeight: '21px'}}>PC parts</Typography></Link></li>
                        <li><Link href={'/'} ><Typography  fontSize={brokenWords?'10px':'14px'} component={"b"}   style={{color:'black',marginRight:'10px',textDecoration:'none',fontWeight: '600',lineHeight: '21px'}}>All Other Products</Typography></Link></li>
                        <li><Link href={'/'} ><Typography fontSize={brokenWords?'10px':'14px'}   component={"b"}  style={{color:'black',marginRight:'10px',textDecoration:'none',fontWeight: '600',lineHeight: '21px'}}>Repairs</Typography></Link></li>
                        <li><Link href={'/'} ><Typography  fontSize={brokenWords?'10px':'14px'} component={"b"}   style={{color:'black',marginRight:'10px',textDecoration:'none',fontWeight: '600',lineHeight: '21px'}}>Laptops</Typography></Link></li>
                        <Button variant="outlined" sx={{color:'#0156FF'}}>Our Deals</Button>
                    </Box>
                    <SearchIcon onClick={handleClickOpenInput} fontSize='medium'/>    
                </Box>}
                <Box sx={{display:'flex',alignItems:'center',marginLeft:'2rem'}}>
                    <LocalGroceryStoreIcon fontSize='medium'/>
                    <AccountCircleIcon fontSize='medium'/>
                </Box>
            </Box>
            :<AppbarMobile/>}
        </Box>
    )
}