import * as React from 'react';
import { Box, Radio, RadioGroup, Typography , Button , Modal, TextField, TextareaAutosize  } from '@mui/material';
import { useState } from 'react';
import {testimonials} from "../src/constants/testimonials"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SendIcon from '@mui/icons-material/Send';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export default function Testimonials(){
    const [review,setReview] = useState(0);
    const [open, setOpen] = React.useState(false);
    let aux;



    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event: any) => {
        setReview(event.target.value);
      };

    if (testimonials[review]){
        aux = {id:testimonials[review].id,author:testimonials[review].author,review:testimonials[review].review};
    } else{
        aux = {error:true}
    }
    const handleSubmit = () =>{
        alert("subir nueva review")
    }

    return( <Box maxWidth={"1398px"}>
                <Box sx={{display:'flex'}}>
                    <Box>
                        <FormatQuoteIcon/>
                    </Box>
                    <Box>
                        {aux.error
                        ?<Typography component={'h2'}>The testimony is not available</Typography>
                        :<Typography component={'blockquote'}>{aux.review}</Typography>}
                    </Box>
                </Box>
                <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                    {aux.error
                    ?<Typography component={'h2'}><b>The author is not available</b></Typography>
                    :<Typography component={'h3'}><b>{aux.author}</b></Typography>}
                </Box>
                <Box>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <Button onClick={handleOpen} variant="outlined">Leave us a review</Button>
                        <RadioGroup >
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Leave us a review
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <TextField sx={{width:'100%'}} placeholder='Put your Name and Surname'></TextField>
                                    <TextareaAutosize maxLength={300} placeholder='Put your Review'/>
                                    <Button onClick={handleClose} variant={'outlined'} endIcon={<SendIcon/>}>Send Review</Button>
                                </form>
                            </Box>
                        </Modal>
                            <Box sx={{display:'flex'}}>
                                <Radio defaultChecked onClick={handleChange} value={0}/>
                                <Radio onClick={handleChange} value={1}/>
                                <Radio onClick={handleChange} value={2}/>
                                <Radio onClick={handleChange} value={3}/>
                            </Box>
                        </RadioGroup>
                    </Box>
                </Box>
            </Box>)
}