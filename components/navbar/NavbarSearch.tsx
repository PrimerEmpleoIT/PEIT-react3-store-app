import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';


export default function NavbarSearch({handle}){
    const [input,setInput] = useState("");

    function handleInput(e : any){
        setInput(e.target.vaule)
    }

    return(
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TextField sx={{
                width:'90%',
                margin: '1rem',
                borderRadius: '50%',
                height: '50%' 
            }} id="outlined-basic" label="Search entiere store here..." variant="outlined" >
                <SearchIcon/>
            </TextField>
            <SearchIcon sx={{
                cursor: 'pointer'
            }} fontSize='medium' onClick={(e) => handle()}/>
            <CloseIcon fontSize='medium' color='primary'/>
        </Box>
    )
}