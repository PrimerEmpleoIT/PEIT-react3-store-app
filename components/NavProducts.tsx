import Link from 'next/link';
import { Box } from '@mui/system';
import {Typography, styled} from '@mui/material';
import navCategory from '../src/constants/navCategory'



const NavProducts = (props:any) => {

  let section:any = navCategory[props.in]

  const Text = styled(Typography)`

    font-weight: 700;
    font-size: 22px;
    line-height: 130%;    

    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    ` 
  const Content = styled(Box)`
    margin-right: 3rem;
    :hover{
      border-bottom:2px solid #0156FF ;
    }

  `


  return (
    <Box sx={{
      display:'flex',
      flexDirection:'row',
      margin:'0 auto',
      marginLeft:'3rem'
    }}>
      

      {

          /* console.log('section', section)
          console.log('section-items', section.items) */
          section.items.map((subSection:any, j:number)=>{
            return ( <Content key={j}> <Link href={subSection.url}><Text>{subSection.name}</Text></Link> </Content>)  
          })
          
          
        
      }
      
      
    </Box >
  )
}

export default NavProducts