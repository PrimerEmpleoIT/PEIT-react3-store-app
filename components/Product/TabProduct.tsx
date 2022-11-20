import * as React from 'react';
import { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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


export default function TabProduct(props : any){
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    const {specs,title,description,details} = props;

    return (
        <Box sx={{ width: '100%' ,padding:'1rem' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab sx={{width:'30%'}} label="About Product" {...a11yProps(0)} />
              <Tab sx={{width:'30%'}} label="Details" {...a11yProps(1)} />
              <Tab sx={{width:'30%'}} label="Specs" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Typography fontSize={'18px'}>
                {title}
            </Typography>
            <Typography fontSize={'18px'}>
                {description}
            </Typography >
          </TabPanel>
          <TabPanel value={value} index={1}>
              <Typography  fontSize={'18px'}>
                  {details}
              </Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
              <Typography  fontSize={'18px'}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rem natus ullam voluptates maxime sed deserunt! Iste voluptatum odio dolores nulla, libero, tempora eaque neque nostrum, aspernatur numquam sed quidem?
              </Typography>
          </TabPanel>
        </Box>
      );
}