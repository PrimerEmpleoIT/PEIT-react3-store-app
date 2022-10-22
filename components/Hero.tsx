import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { ArrowBackIos} from '@mui/icons-material';

import { styled } from '@mui/system';



const Hero = (props: any) => {
    //get the images using arrays and useState hook 
    const images = ['1.jpg','2.jpg','3.jpg','4.jpg'];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    
  
    // function to previous and next image in de hero banner  
    const selectNewImage = (index:number,images: string[] , next = true) =>{
        
        const condition = next ? selectedIndex < images.length - 1: selectedIndex > 0;
        const nextIndex = next ? (condition ?  selectedIndex + 1 : 0) : condition ?  selectedIndex - 1 : images.length - 1;
        console.log(nextIndex);
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    }

    

    const previous =() =>{
        selectNewImage(selectedIndex, images, false);
    }

    const next = () => {
        selectNewImage(selectedIndex, images);
    }

    useEffect(()=>{
        const interval = setInterval(() => {
            selectNewImage(selectedIndex , images);
          }, 5000);
        return () => clearInterval(interval);
        
    },[selectedIndex])  

    const Content = styled('div')({
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        maxWidth:'1200px',
        position:'relative',
        margin:'0 auto'
    });
    
    const Back = styled('button')({
        background: '#252931',
        opacity: '0.5',
        borderRadius: '0px 30px 30px 0px',  
        cursor:'pointer',
        pointerEvents:'all',
        outline:'none',
        width:'50px',
        height:'50px',
        transition:'.3s ease all',
        color:'white'
    })

    
    const Next = styled('button')({
        background: '#252931',
        opacity: '0.5',
        borderRadius: '0px 30px 30px 0px',
        transform: 'rotate(-180deg)',
        cursor:'pointer',
        pointerEvents:'all',
        outline:'none',
        width:'50px',
        height:'50px',
        transition:'.3s ease all',
        color:'white'
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

    
    return (

        <Content>   
            <div>
                <Image  src={require(`public/img/${selectedImage}`).default} alt="Hero-Imagen" />
            </div>
            
            <Controls>
                <Back onClick={previous}><ArrowBackIos/></Back>
                <Next onClick={next}><ArrowBackIos/></Next>
            </Controls>
        </Content>
  
    
  )
}

export default Hero