import React, { useState } from 'react'
import Image from 'next/image';
import { ArrowBackIos, ArrowForwardIos} from '@mui/icons-material';

import { styled } from '@mui/system';
import { makeStyles } from '@material-ui/core/styles'; 
import { Theme } from '@mui/material';




const Hero = (props: any) => {
    //get the images using arrays and useState hook 
    const images = ['1.jpg','2.jpg','3.jpg','4.jpg'];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
  
    // function to previous and next image in de hero banner  
    const selectNewImage = (index:number,images: string[] , next = true) =>{
        const condition = next ? selectedIndex < images.length - 1: selectedIndex > 0;
        const nextIndex = next ? (condition ?  selectedIndex + 1 : 0) : condition ?  selectedIndex - 1 : images.length - 1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    }

    const previous =() =>{
        selectNewImage(selectedIndex, images, false);
    }

    const next = () => {
        selectNewImage(selectedIndex, images);
    }

    const Content = styled('div')({
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        maxWidth:'1200px',
        position:'relative'
    });
    
    const Button = styled('button')({
        background: '#252931',
        opacity: '0.5', 
        cursor:'pointer',
        pointerEvents:'all',
        outline:'none',
        width:'50px',
        height:'50px',
        transition:'.3s ease all',

    })
    
    const Controls = styled('div')({ 
        position:'absolute',
        top:0,
        width:'100%',
        height:'100%',
        PointerEvent:'none',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    })

    const useStyles:any = makeStyles(() => ({
        none: {
            borderRadius: '0px 30px 30px 0px',
            transform: "none"
        },
        headsDown: {
            borderRadius: '0px 30px 30px 0px',  
            transform: "rotate(-180deg)"
        }
      }));
    

    const classes = useStyles()

    return (
    <Content>   
        
            <div>
                <Image className='hola' src={require(`public/img/${selectedImage}`).default} alt="Hero-Imagen" />
            </div>
            
            <Controls>
                <Button className={classes.none} onClick={previous}><ArrowBackIos/></Button>
                <Button className={classes.headsDown} onClick={next}><ArrowForwardIos/></Button>
            </Controls>
        
        
    </Content>
  )
}

export default Hero