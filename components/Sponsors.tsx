
import { Container, styled } from '@mui/system';
import Box from '@mui/material/Box';
import Image from 'next/image';

import image1 from '../public/img/image1.png'
import image2 from '../public/img/image2.png'
import image3 from '../public/img/image3.png'
import image4 from '../public/img/image4.png'
import image5 from '../public/img/image5.png'
import image6 from '../public/img/image6.png'
import image7 from '../public/img/image7.png'
 

const Sponsors = () => {
  const images = [image1,image2,image3,image4,image5,image6,image7];

  const ContentImage = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '35px 55px',
    gap: '10px',
        
    width: '200px',
    height: '149.48px',
    left: '261px',
    top: '2613px'
  })
  

  return (
    <Container maxWidth="sm" sx={{
      display:'flex',
      justifyContent:'center',
      flexFlow:'row wrap'
      
    }}>
      {
        images.map((source,index)=>{
          return (
            <ContentImage key={index}>
              <Image style={{ 
              /* width: '152.72px',
              height: '80px', */
              flex:'none',
              order:'0',
              flexGrow:'0'}} src={source}  alt={'imagen'} width={'152.72px'} height = {'80px'}/>
            </ContentImage>
          )
        })
      }
     
      
      
    </Container>
  )
}

export default Sponsors