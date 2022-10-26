import { Box, Radio, RadioGroup, Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import {testimonials} from "../src/constants/testimonials"



export default function Testimonials(){
    const [review,setReview] = useState(0)
    let aux;

    const handleChange = (event: any) => {
        setReview(event.target.value);
      };
    
    if (testimonials[review]){
        aux = {id:testimonials[review].id,author:testimonials[review].author,review:testimonials[review].review};
    } else{
        aux = {error:true}
    }
    
    return( <Box>
                <Box>
                    {aux.error
                    ?<Typography>The testimony is not available</Typography>
                    :<Typography>{aux.review}</Typography>}
                </Box>
                <Box>
                    {aux.error
                    ?<Typography>The author is not available</Typography>
                    :<Typography>{aux.author}</Typography>}
                </Box>
                <Box>

                    <Box>
                        <RadioGroup>
                            <Radio onClick={handleChange} value={0}/>
                            <Radio onClick={handleChange} value={1}/>
                            <Radio onClick={handleChange} value={2}/>
                            <Radio onClick={handleChange} value={3}/>
                        </RadioGroup>
                    </Box>
                </Box>
            </Box>)
}