
import { Container} from '@mui/system';
import {Typography, styled} from '@mui/material';
import { Paper } from '@mui/material';
import Custom from '../public/img/1Custom.png'




const Styles = {
  paperContainer: {
      backgroundImage: `url(${Custom})`,
  }
};


const TypeProducts = (category : any) => {
  const Text = styled(Typography)`

    font-weight: 700;
    font-size: 22px;
    line-height: 130%;

    /* or 29px */
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
    :hover{

    }
    `
  

  return (

    <Container maxWidth="sm" sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
      }}>
        <Paper style={Styles.paperContainer}>
          <Text>Custome Products</Text>
          <a href="#">See more Products</a>
        </Paper>
      
    </Container>
  )
}

export default TypeProducts