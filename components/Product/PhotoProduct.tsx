import { Box } from "@mui/system";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


export default function PhotoProduct(props : any){



    return(
        <Box sx={{width:'100%',padding:'.5rem',display:'flex',flexDirection:'column'}}>
            <Box sx={{display:'flex'}}>
                <Box sx={{width:'20%',display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                    <FavoriteBorderIcon fontSize='large'/>
                    <BarChartIcon fontSize='large'/>
                    <MailOutlineIcon fontSize='large'/>
                </Box>
                <Box sx={{width:'80%',display:'flex'}}>
                    <Box component={'img'} src={props.url} sx={{minWidth:'120px',maxWidth:'250px',margin:'auto'}}></Box>
                </Box>
            </Box>
            <Box>
                <p>Aca va el componente zip</p>
            </Box>
        </Box>
    )
}