import { Box , Button , Stack} from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function ProductSupport(){

    return(
        <Box sx={{width:'100%',display:'flex',position:'relative',margin:'0 auto',alignItems:'center',justifyContent:'center'}}>
            <Stack sx={{position:'absolute',left:'10rem',justifyContent:'center'}} direction={'column'} spacing={1} >
            <Button variant="outlined" endIcon={<ArrowRightAltIcon color={'primary'} fontSize={'medium'} />}>
                Product Support
            </Button>
            <Button variant="outlined" endIcon={<ArrowRightAltIcon color={'primary'} fontSize={'medium'} />}>
                FAQ
            </Button>
            <Button variant="outlined" endIcon={<ArrowRightAltIcon color={'primary'} fontSize={'medium'} />}>
                Our Buyer Guide
            </Button>
            </Stack >
            <Box sx={{maxWidth:'656px'}} component={'img'} src={'https://www.mark-petrie.com/wp-content/uploads/2018/07/telefonos-asistencia-motivo-1.jpg'}></Box>
        </Box>
    )
}