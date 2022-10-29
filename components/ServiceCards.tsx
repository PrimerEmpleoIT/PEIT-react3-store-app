import { Typography, useMediaQuery } from "@mui/material"
import Box from "@mui/material/Box";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

export default function ServiceCards(){
    const isBiggerTablet = useMediaQuery("(min-width:800px)")
    const isSmall = useMediaQuery("(max-width:500px)")
    
    return(
        <Box 
        width={isBiggerTablet ?'80%':'100%'}
        flexDirection={isSmall?'column':'row'}
        sx={{
            maxWidth:'1398px',
            margin: 'auto',
            display: 'flex',
            alignItems:'center',
            justifyContent:'center'
        }}
        >
            <Box sx={{display: 'flex',flexDirection:'column',alignItems: 'center',margin:'.5rem'}}>
                <Box><SupportAgentRoundedIcon sx={{width:'3rem',backgroundColor:'#0156FF',color:'white',borderRadius:'50%',padding:'.5rem',height:'3rem'}} fontSize="large"/></Box>
                <Typography sx={{fontStyle:'bold'}} component={"h3"}><b>Product Support</b></Typography>
                <Typography sx={{textAlign:'center',fontSize:'12px'}} component={"p"}>Up to 3 years on-site warranty available for your peace of mind</Typography>
            </Box>
            <Box sx={{display: 'flex',flexDirection:'column',alignItems: 'center',margin:'.5rem'}}>
                <Box><AccountCircleRoundedIcon sx={{width:'3rem',color:'white',backgroundColor:'#0156FF',borderRadius:'50%',padding:'.5rem',height:'3rem'}} fontSize="large"/></Box>
                <Typography component={"h3"}><b>Personal Account</b></Typography>
                <Typography sx={{textAlign:'center',fontSize:'12px'}} component={"p"}>With big discounts, free delivery and a dedicated support specialist</Typography>
            </Box>
            <Box sx={{display: 'flex',flexDirection:'column',alignItems: 'center',margin:'.5rem'}}>
                <Box><LocalOfferRoundedIcon sx={{width:'3rem',color:'white',backgroundColor:'#0156FF',borderRadius:'50%',padding:'.5rem',height:'3rem'}} fontSize="large"/></Box>
                <Typography component={"h3"}><b>Amazing Savings</b></Typography>
                <Typography sx={{textAlign:'center',fontSize:'12px'}} component={"p"}>Up to 70% off new Products,you can be sure of the best price</Typography>
            </Box>
        </Box>
    )
}