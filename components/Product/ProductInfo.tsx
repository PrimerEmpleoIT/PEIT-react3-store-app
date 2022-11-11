import { useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function ProductInfo(props: any){
    const movil = useMediaQuery("(max-width:768px)");
    let {title,price,stock,rate,revies,img} = props.product;
    return(
        <Box sx={{maxWidth:'1398px',minWidth:'100vw',display:'flex',alignItems:'center'}}>
            {movil
            ?<Box sx={{display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto'}}>
                <Box sx={{width:'100%',position:'relative',display:'flex',alignItems:'flex-start',margin:'auto',marginTop:'1rem'}}>
                    <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',height:'100%'}}>
                        <Box  sx={{margin:'.3rem 0'}}>
                            <FavoriteBorderIcon fontSize={'large'} />
                        </Box>
                        <Box sx={{margin:'.3rem 0'}}>
                            <BarChartIcon  fontSize={'large'} />
                        </Box>
                        <Box sx={{margin:'.3rem 0'}}>
                            <MailOutlineIcon  fontSize={'large'} />
                        </Box>
                    </Box>
                    <Box component={"img"} src={`${img}`}></Box>
                </Box>
            </Box>
            :null}
        </Box>
    )
}