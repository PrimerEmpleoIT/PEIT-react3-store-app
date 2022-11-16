import { Box } from "@mui/system";
import PaymentIcon from '@mui/icons-material/Payment';
import Button from '@mui/material/Button';
import { Typography, useMediaQuery } from "@mui/material";


export default function PayComponent(props : any){
    const tablet = useMediaQuery("(min-width:768px)")

    return(
        <Box flexDirection={tablet?'row':'column'} sx={{display:'flex'}}>
            <Box sx={{display:'flex'}}>
                <input type="number" id="tentacles" name="tentacles"
                min="1" max="5" defaultValue={1}></input>
                <Button variant={'contained'}>Add to chart</Button>
                <Button variant={'contained'} startIcon={<PaymentIcon/>}>PayPal</Button>
            </Box>
            <Typography>
                On sale from {props.price}
            </Typography>
        </Box>
    )
}