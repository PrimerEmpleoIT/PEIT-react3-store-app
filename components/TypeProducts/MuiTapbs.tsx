import { Key } from '@mui/icons-material';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import typeProducts from '../../src/constants/typeProducts';
import ProductCard from '../ProductCard';

const MuiTabs = (props:any) => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event:any, newTabIndex:any) => {
        setTabIndex(newTabIndex);
    };

    let typeItems:any = typeProducts[props.ind];
    /* const allProducts:any = typeProducts[props.index].products; */
    
    const type:any = typeProducts[(props.ind)+1]
    
    const items = type.products.filter( (item: { specs: string; }) => item.specs == "MSI GS Series")
    console.log(items)

  return (
    <Box>
      <Box>
        <Tabs value={tabIndex} onChange={handleTabChange}>
        {
            type.types.map((subSection:any , j:number)=>{
                return(
                    <Tab key={j} label={subSection.name} />
                )
            })
        }          
          
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>

      {
            type.types.map((subSection:any , j:number)=>{
                return(
                    
                    tabIndex === subSection.id && (
                        <Box key={j}>
                          <Typography> {subSection.name }</Typography>
                          
                        </Box>
                      )
                )
            })
        }
        
        
        
      </Box>
    </Box>
  );
}

export default MuiTabs;