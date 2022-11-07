import * as React from 'react';
import { useState } from 'react';
import { Box } from "@mui/system";
import { Typography, Divider, TextField, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { footerData, creditcards } from "../src/constants/footer";
import Swal from 'sweetalert2';
import useMediaQuery from '@mui/material/useMediaQuery';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

function checkearEmail(email:string){
  if (!email) return false;
  return re.test(email);
}
const Footer = () => {
  const [mail, setMail] = useState("");
  const matches = useMediaQuery('(min-width:860px)');

  const handleSubscribe = (e:any) => {
    let check:boolean = checkearEmail(mail);


    (check)
    ?Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'We will send you all the news!!!',
      showConfirmButton: false,
      timer: 1500
    })
    :Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong! Please enter a valid email address or try again later'
    })
  }

  const handleChangeEmail = (e : any) => setMail(e.target.value);

  return (
    <Box
      sx={{
        backgroundColor: "#020203",
        color: "#FFF",
        width: '100%'
      }}
    >
     {matches 
     ? <Box
     maxWidth={'1398px'}
     sx={{
       margin: "0 auto",
       display: "flex",
       flexDirection: "column",
       paddingTop: "40px",
       paddingX: 4,
     }}
   >
     <Box
       sx={{
         display: "flex",
         justifyContent: "space-between",
         flexWrap: "wrap",
       }}
     >
       <Box>
         <Typography variant="h4">Sign Up To Our Newsletter.</Typography>
         <Typography>
           Be the first to hear about the latest offers.
         </Typography>
       </Box>
       <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
         <TextField
           size="small"
           label="Your Email"
           InputLabelProps={{
             style: {
               color: "white",
             },
           }}
           variant="filled"
           sx={{
             border: "2px solid #FFF",
             borderRadius: "4px",
             input: { color: "#FFF", width: "300px" },
           }}
           onChange={handleChangeEmail}
         />
         <Button
           sx={{
             backgroundColor: "#0156ff",
             color: "#FFF",
             paddingX: "40px",
             paddingY: "10px",
             borderRadius: "35px",
             ":hover": { backgroundColor: "blue", transition: "0.6s" },
             marginLeft: "20px",
           }} onClick={handleSubscribe}>
           Subscribe
         </Button>
       </Box>
     </Box>

     <Box
       sx={{
         marginY: 5,
         display: "flex",
         columnGap: "78px",
       }}
     >
       {footerData.map((block) => (
         <Box key={block.id}>
           <Typography
             key={block.title}
             sx={{ marginBottom: 2, color: "#808081", fontSize: '14px' }}
           >
             {block.title}
           </Typography>
           <Box>
             {block.items.map((item, i) => (
               <Typography key={i} sx={{fontSize: '14px'}}>{item}</Typography>
             ))}
           </Box>
         </Box>
       ))}
     </Box>

     <Divider sx={{ borderColor: "#808081" }} />

     <Box
       sx={{
         marginY: "20px",
         display: "flex",
         justifyContent: "space-between",
         color: "#808081",
         flexWrap: "wrap",
       }}
     >
       <Box>
         <FacebookIcon sx={{ marginRight: "10px" }} />
         <InstagramIcon />
       </Box>
       <Box sx={{ display: "flex", columnGap: "10px" }}>
         {creditcards.map(cc => (
           <Box key={cc.id} component={'img'} src={cc.imgUrl} sx={{height: '20px', backgroundColor: '#FFF', borderRadius: '4px', minWidth: '30px' }}></Box>
         ))}
       </Box>

       <Typography variant="caption">
         Copyright © 2020 Shop Pty. Ltd.
       </Typography>
     </Box>
   </Box> 
   :
          <Box sx={{display: 'flex',flexDirection:'column',padding:'1rem'}}>
            <Box>
         <Typography variant="h4" fontSize={'18px'}>Sign Up To Our Newsletter.</Typography>
         <Typography fontSize={'14px'}>
           Be the first to hear about the latest offers.
         </Typography>
       </Box>
       <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
         <TextField
           size="small"
           label="Your Email"
           InputLabelProps={{
             style: {
               color: "white",
             },
           }}
           variant="filled"
           sx={{
             border: "2px solid #FFF",
             borderRadius: "4px",
             input: { color: "#FFF", width: "200px" },
           }}
           onChange={handleChangeEmail}
         />
         <Button
           sx={{
             backgroundColor: "#0156ff",
             color: "#FFF",
             paddingX: "40px",
             paddingY: "10px",
             borderRadius: "35px",
             ":hover": { backgroundColor: "blue", transition: "0.6s" },
             marginLeft: "20px",
           }} onClick={handleSubscribe}>
           Subscribe
         </Button>
       </Box>
       {footerData.map(el => {
        return <Accordion key={el.id} sx={{backgroundColor:'#020203'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color='info' />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                  <Typography sx={{color:'white',fontSize:'16px'}}>{el.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {el.items.map((items,index) => {
                    return <Typography sx={{color:'white',fontSize:'14px'}} key={index}>{items}</Typography>
                  })}
                </AccordionDetails>
        </Accordion>
       })}
            <Box
              sx={{
                 marginY: "20px",
                display: "flex",
                justifyContent: "space-between",
                color: "#808081",
                flexWrap: "wrap",
              }}
              >
            <Box>
              <FacebookIcon sx={{ marginRight: "10px" }} />
              <InstagramIcon />
            </Box>
            <Box sx={{ display: "flex", columnGap: "10px" }}>
              {creditcards.map(cc => (
                <Box key={cc.id} component={'img'} src={cc.imgUrl} sx={{height: '20px', backgroundColor: '#FFF', borderRadius: '4px', minWidth: '30px' }}></Box>
              ))}
            </Box>
              <Typography variant="caption">
                Copyright © 2020 Shop Pty. Ltd.
              </Typography>
            </Box>
          </Box>
   }
    </Box>
  );
};

export default Footer;
