import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from '@mui/system';
import hero from '../src/constants/hero'
import useMediaQuery from "@mui/material/useMediaQuery";

const HeroCarousel = (props : any) => {
  const mobile = useMediaQuery("(min-width:400px)");
  const tablet = useMediaQuery("(min-width:900px)");
  let responsiveWidth = 1400;
  if (!tablet && mobile) {
    responsiveWidth = 850;
  } else if (!mobile) {
    responsiveWidth = 390;
  } else if (tablet && mobile) {
    responsiveWidth = 1400;
  }

  
const responsive = {
  desktop: {
  breakpoint: {
      max: 3000,
      min: 1024
  },
  items: 1
  },
  mobile: {
  breakpoint: {
      max: 464,
      min: 0
  },
  items: 1
  },
  tablet: {
  breakpoint: {
      max: 1024,
      min: 464
  },
  items: 1
  }

};

  return (

    <Box width={responsiveWidth} sx={{ margin: "auto" }}>

    
    <Carousel  
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
        >
        

        {
          hero.map((data)=>{
            return(
            <Box
                key={data.id}
                component={"img"}
                src={data.img}
                alt = {data.name}
                sx={{ display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
                      
                    }}
              />
              
              
              )
          })
        }
       
        
        </Carousel>
    </Box>

  )
}

export default HeroCarousel
