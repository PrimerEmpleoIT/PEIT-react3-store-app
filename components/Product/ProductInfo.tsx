import { useMediaQuery , Button } from "@mui/material"
import { Box } from "@mui/system"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import * as React from 'react';
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

    let {title,price,stock,rate,revies,img} = props.product;
    return(
        <Box sx={{maxWidth:'1398px',minWidth:'100vw',display:'flex',alignItems:'center'}}>
            {movil
            ?<Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:'0 auto'}}>
                <Box sx={{width:'100%',display:'flex',alignItems:'flex-start',margin:'auto',marginTop:'1rem'}}>
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
                <Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="About Product" {...a11yProps(0)} />
                        <Tab label="Details" {...a11yProps(1)} />
                        <Tab label="Specs" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <Typography variant={'h6'}>{title}</Typography>
                <a href={"#"}>Be the first to review this product</a>
                <TabPanel value={value} index={0}>
                    About    
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Details
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Specs
                </TabPanel>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',width:'100%'}}>
                    <Box sx={{display:'flex',justifyContent:'space-between',height:'4rem'}}>
                        <Box>
                            <label htmlFor="cant"></label>
                            <input style={{height:'3rem',backgroundColor:'red',fontSize:'20px',textAlign:'center'}} type="number" id="cant" name="tentacles" min="1" max="5"></input>
                        </Box>
                        <Button sx={{height:'3rem'}} variant="contained">Add to cart</Button>
                        <Button sx={{height:'3rem'}} variant="outlined" startIcon={<PaymentIcon />}>
                            PayPal
                        </Button>
                    </Box>  
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'red',width:'100%',padding:'1rem'}}>
                        <Typography sx={{marginRight:'5px',fontSize:'16px'}}>On sale from</Typography>
                        <Typography sx={{fontWeight:'bold',fontSize:'16px'}}>${price}</Typography>
                    </Box>
                </Box>
            </Box>
            :null}
        </Box>
    )
}