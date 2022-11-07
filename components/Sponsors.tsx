
import { Container, Box } from '@mui/system';
import {styled} from '@mui/material';
import sponsor from '../src/constants/sponsor'


const Sponsors = (props: any) => {


  const ContentImage = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
        
    width: 200px;
    height: 149.48px;
    :hover{
      background-color: #ebebeb;
      transition: .2s;
    }

    `
  

  return (
    <Container maxWidth="sm" sx={{
      display:'flex',
      justifyContent:'center',
      flexFlow:'row wrap'
      
    }}>

      
      
      {
        sponsor.map((source,index)=>{
          return (
            <ContentImage key={index}>
              
              <Box
                component={"img"}
                src={source.img}
                alt = {source.name}
                sx={{ flex:'none',
                      order:'0',
                      flexGrow:'0',
                      width:'152.72px', 
                      height :'80px'
                      
                    }}
              />
              
            </ContentImage>
          )
        })
      }
     
      
      
    </Container>
  )
}

export default Sponsors