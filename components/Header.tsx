import * as React from 'react';
import { useState } from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, Typography } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isNotSmallerScreen = useMediaQuery("(min-width:900px)");
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        fontWeight: "600",
        fontSize: "12px",
        backgroundColor: "#020202",
        width: "100%",
        color: "#FFF",
      }}
    >
      <Box
        flexDirection={isNotSmallerScreen ? "row" : "column"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "lg",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent:'center',
            flexDirection:'row'
          }}
        >
          <Box sx={{display:'flex',flexDirection:'row'}}>
            <Typography sx={{color:'rgba(162, 166, 176, 1)'}} fontSize={'13px'}>Mon-Thu: </Typography>
            <Typography sx={{color:'white',marginLeft:'.1rem'}} fontSize={'13px'}>9:00 AM - 5:30 PM</Typography>
          </Box>  
          <Button sx={{cursor:'pointer',width:'2rem'}} 
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}>
            <KeyboardArrowDownIcon  fontSize='medium'/>
          </Button>
          <Menu
            sx={{width:'100vw'}}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
            <MenuItem onClick={handleClose}>
              <Box sx={{display:'flex',flexDirection:'row'}}>
                <AccessTimeIcon color={'primary'} sx={{marginRight:'.3rem'}} fontSize='large'/>
                <Box>
                  <Typography>We are open:</Typography>
                  <Typography sx={{color:'rgba(162, 166, 176, 1)',fontSize:'13px'}}>Mon-Thu:</Typography>
                  <Typography sx={{color:'rgba(0, 0, 0, 1)'}}>9:00 AM - 5:30 PM</Typography>
                  <Box>
                    <Typography sx={{color:'rgba(162, 166, 176, 1)',fontSize:'13px'}}>Fr: </Typography>
                    <Typography sx={{color:'rgba(0, 0, 0, 1)'}}>9:00 AM - 6:00 PM</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{color:'rgba(162, 166, 176, 1)',fontSize:'13px'}}>Sat: </Typography>
                    <Typography sx={{color:'rgba(0, 0, 0, 1)'}}>11:00 AM - 5:00 PM</Typography>
                  </Box>
                </Box>
              </Box>
            </MenuItem>
            <hr></hr>
            <MenuItem onClick={handleClose}>
            <Box sx={{display:'flex',flexDirection:'row'}}>
                <LocationOnIcon sx={{marginRight:'.3rem'}} color={'primary'} fontSize={'large'}/>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                  <Typography sx={{display:'flex',flexDirection:'column'}} fontSize={'13px'}>Address: 1234 Street Adress,</Typography>
                  <Typography sx={{display:'flex',flexDirection:'column'}} fontSize={'13px'}>City Address, 1234</Typography>
                </Box>
              </Box>
            </MenuItem>
            <hr></hr>
            <MenuItem onClick={handleClose}>
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',margin:'auto'}}>
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                  <Typography  fontSize={'14px'}>Phones:</Typography>
                  <Typography fontSize={'14px'} sx={{color:'rgba(1, 86, 255, 1)',cursor:'pointer'}}> (00) 1234 5678</Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                  <Typography fontSize={'14px'}>E-mail:</Typography>
                  <Typography fontSize={'14px'} sx={{color:'rgba(1, 86, 255, 1)',cursor:'pointer'}}>shop@email.com</Typography>
                </Box>
              </Box>
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#ACACAC",
            }}
          >
            Visit our showroom in 1234 Street Adress City Address, 1234
          </Box>
          <Box
            sx={{
              padding: "0.5em",
              display: "flex",
              textDecoration: "underline",
              lineHeight: "18px",
              alignItems: "center",
            }}
          >
            Contact Us
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Call Us: (00) 1234 5678
          <InstagramIcon
            sx={{ height: "15.45px", marginLeft: "0.1em" }}
          ></InstagramIcon>
          <FacebookIcon
            sx={{ height: "15.45px", marginLeft: "0.1em" }}
          ></FacebookIcon>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
