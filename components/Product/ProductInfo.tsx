import * as React from 'react';
import { useState,useEffect } from 'react';
import { useMediaQuery , Button } from "@mui/material"
import { Box } from "@mui/system"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PaymentIcon from '@mui/icons-material/Payment';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProductInfo(props: any){
    const [value, setValue] = React.useState(0);
    const movil = useMediaQuery("(max-width:768px)");
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    let {title,description,details,specs,images,price,createdat,stock,category} = props.product;
    return(
        <Box sx={{maxWidth:'1398px',minWidth:'100vw',display:'flex',alignItems:'center'}}>
            {movil
            ?<Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:'0 auto'}}>
                <Box sx={{width:'100%',display:'flex',alignItems:'flex-start',margin:'auto',marginTop:'1rem',position:'relative'}}>
                    <Box  sx={{position:'absolute',left:'1rem',top:'0'}}>
                        <FavoriteBorderIcon fontSize={'large'} />
                    </Box>
                    <Box sx={{position:'absolute',left:'1rem',top:'3rem'}}>
                        <BarChartIcon  fontSize={'large'} />
                    </Box>
                    <Box sx={{position:'absolute',left:'1rem',top:'6rem'}}>
                        <MailOutlineIcon  fontSize={'large'} />
                    </Box>
                    <Box sx={{width:'60%',margin:'0 auto'}} component={"img"} src={`${images}`}></Box>
                </Box>
                <Box sx={{padding:'1rem'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="About Product" {...a11yProps(0)} />
                        <Tab label="Details" {...a11yProps(1)} />
                        <Tab label="Specs" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <Typography variant={'h6'}>{title}</Typography>
                <a style={{textDecoration:'none'}} href={"#"}>Be the first to review this product</a>
                <TabPanel value={value} index={0}>
                    <Typography component={'p'}>{description}</Typography>    
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Typography component={'p'}>{details}</Typography> 
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ul>
                    </ul>
                </TabPanel>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',width:'100%',padding:'1rem'}}>
                    <Box sx={{display:'flex',justifyContent:'space-between',height:'4rem'}}>
                        <Box>
                            <label htmlFor="cant"></label>
                            <input style={{height:'3rem',backgroundColor:'#F5F7FF',fontSize:'20px',textAlign:'center'}} type="number" id="cant" name="tentacles" defaultValue={1} min="1" max="5"></input>
                        </Box>
                        <Button sx={{height:'3rem'}} variant="contained">Add to cart</Button>
                        <Button sx={{height:'3rem'}} variant="outlined" startIcon={<PaymentIcon />}>
                            PayPal
                        </Button>
                    </Box>  
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#F5F7FF',width:'100%',padding:'1rem'}}>
                        <Typography sx={{marginRight:'5px',fontSize:'16px'}}>On sale from</Typography>
                        <Typography sx={{fontWeight:'bold',fontSize:'16px'}}>${price}</Typography>
                    </Box>
                </Box>
            </Box>
            :null}
        </Box>
    )
}

