import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import Hero1 from "../../components/AboutUs/Hero1"
import Hero2 from "../../components/AboutUs/Hero2"
import Hero3 from "../../components/AboutUs/Hero3"
import Hero4 from "../../components/AboutUs/Hero4"
import Hero5 from "../../components/AboutUs/Hero5"

export default function indexAboutUs(){
    return(
        <Box sx={{display:'flex',flexDirection:'column',minWidth:'100vw',maxWidth:'1398px'}}>
            <Typography variant="h2" sx={{textAlign:'left'}}>About Us</Typography>
            <Hero1/>
            <Hero2/>
            <Hero3/>
            <Hero4/>
            <Hero5/>
        </Box>     
    )
}