import { Box } from "@mui/system";
import { Typography, useMediaQuery } from "@mui/material";


export default function FeatureCard(){
    const biggerTablet = useMediaQuery("(min-width:900px)")
    const biggerMobile = useMediaQuery("(min-width:500px)") 

    return (
        <Box sx={{display:'flex',minWidth:'100vw',maxWidth:'1398px',flexDirection:'column',alignItems:'center',background:'radial-gradient(50% 50% at 50% 50%, #242528 0%, #040404 100%);'}}>
            <Box sx={{display:'flex',flexDirection:'column'}} >
                <Typography  variant={biggerMobile?'h3':'h5'} sx={{textAlign:'center',color:'rgba(255, 255, 255, 1)',weight:'500',margin:'0',marginTop:'1rem',marginBottom:'1rem'}}>Feature</Typography>
                <Typography width={biggerTablet?'50%':'80%'} variant={'caption'} sx={{lineHeight:'26px',margin:'0 auto',color:'white',textAlign:'center'}}>The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.</Typography>
            </Box>
            <Box sx={{display:'flex',maxWidth:'100vw'}}  flexDirection={biggerTablet?'row':'column'}>
                <Box sx={{display:'flex',margin:'0 auto'}}  flexDirection={biggerTablet?'row':'column'}>
                    <Box sx={{display:'flex'}}  flexDirection={biggerTablet?'row':'column'}>
                        <Box sx={{display:'flex',maxWidth:'300px',flexDirection:'column',margin:'1rem auto',padding:'1rem'}}>
                            <Box sx={{width:'100px',height:'100px',margin:'0 auto',borderRadius:'50%',backgroundColor:'black',display:'flex'}}>
                                <Box component={'img'} src={'https://cdn-icons-png.flaticon.com/512/888/888863.png'} sx={{width:'80px',height:'80px',margin:'auto'}}></Box>
                            </Box>
                            <Typography sx={{fontSize:'14px',lineHeight:'22px',color:'white',marginTop:'1rem'}}>Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex',margin:'0 auto'}}  flexDirection={biggerTablet?'row':'column'}>
                        <Box sx={{display:'flex',maxWidth:'300px',flexDirection:'column',margin:'1rem auto',padding:'1rem'}}>
                            <Box sx={{width:'100px',height:'100px',margin:'0 auto',borderRadius:'50%',backgroundColor:'black',display:'flex'}}>
                            <Box component={'img'} src={'https://www.nvidia.com/content/dam/en-zz/Solutions/GeForce/campaigns/hyper-scape-bundle/new-creative/geforce-rtx-hyper-scape-benefits-rtx-icon-dltp.png'} sx={{width:'80px',height:'80px',margin:'auto'}}></Box>
                            </Box>
                            <Typography sx={{fontSize:'14px',lineHeight:'22px',color:'white',marginTop:'1rem'}}>The new GeForce® RTX SUPER™ Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display:'flex'}}  flexDirection={biggerTablet?'row':'column'}>
                    <Box sx={{display:'flex'}}  flexDirection={biggerTablet?'row':'column'}>
                        <Box sx={{display:'flex',maxWidth:'300px',flexDirection:'column',margin:'1rem auto',padding:'1rem'}}>
                        <Box sx={{width:'100px',height:'100px',margin:'0 auto',borderRadius:'50%',backgroundColor:'black',display:'flex'}}>
                            <Box component={'img'} src={'https://storage-asset.msi.com/global/picture/image/feature/nb/Summit/Summit-E14-Flip/ssd-logo.png'} sx={{width:'80px',height:'80px',margin:'auto'}}></Box>
                        </Box>
                            <Typography sx={{fontSize:'14px',lineHeight:'22px',color:'white',marginTop:'1rem'}}>Unleash the full potential with the latest SSD technology, the NVM Express. 6 times faster than traditional SATA SSD.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex'}}  flexDirection={biggerTablet?'row':'column'}>
                        <Box sx={{display:'flex',maxWidth:'300px',flexDirection:'column',margin:'1rem auto',padding:'1rem'}}>
                        <Box sx={{width:'100px',height:'100px',margin:'0 auto',borderRadius:'50%',backgroundColor:'black',display:'flex'}}>
                            <Box component={'img'} src={'https://storage-asset.msi.com/global/picture/image/feature/nb/Summit/Summit-E14-Flip/ssd-logo.png'} sx={{width:'80px',height:'80px',margin:'auto'}}></Box>
                        </Box>
                            <Typography sx={{fontSize:'14px',lineHeight:'22px',color:'white',marginTop:'1rem'}}>Featuring the latest 10th Gen Intel® Core™ processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}