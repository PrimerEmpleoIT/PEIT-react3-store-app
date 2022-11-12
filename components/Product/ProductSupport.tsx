import { Box , Button , Stack} from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function ProductSupport(){

    return(
        <Box sx={{width:'100%',maxWidth:'1398px',display:'flex'}}>
            <Stack direction={'column'} spacing={1} >
            <Button variant="outlined" endIcon={<ArrowRightAltIcon color={'secondary'} fontSize={'medium'} />}>
                Product Support
            </Button>
            <Button variant="outlined" endIcon={<ArrowRightAltIcon color={'secondary'} fontSize={'medium'} />}>
                Send
            </Button>
            <Button variant="outlined" endIcon={<ArrowRightAltIcon color={'secondary'} fontSize={'medium'} />}>
                Send
            </Button>
            </Stack >
            <Box component={'img'} src={'https://blog.hubspot.es/hubfs/media/servicioalclienteadistancia.jpeg'}></Box>
        </Box>
    )
}