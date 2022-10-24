import * as React from 'react';
import {  List , ListItem,IconButton,ListItemText, Button} from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";


export default function ListItems(){
    return(
        <>
            <List sx={{ margin:'auto', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem  disableGutters secondaryAction={
                    <IconButton>
                        <ArrowRightAlt/>
                    </IconButton>
                }>
                    <ListItemText primary={`Laptops`} />
                </ListItem>
                <ListItem  disableGutters secondaryAction={
                    <IconButton>
                        <ArrowRightAlt/>
                    </IconButton>
                }>
                    <ListItemText primary={`Desktop PCs`} />
                </ListItem>
                <ListItem  disableGutters secondaryAction={
                    <IconButton>
                        <ArrowRightAlt/>
                    </IconButton>
                }>
                    <ListItemText primary={`Networking Devices`} />
                </ListItem>
                <ListItem  disableGutters secondaryAction={
                    <IconButton>
                        <ArrowRightAlt/>
                    </IconButton>
                }>
                    <ListItemText primary={`Printers & Scanners`} />
                </ListItem>
                <ListItem  disableGutters secondaryAction={
                    <IconButton>
                        <ArrowRightAlt/>
                    </IconButton>
                }>
                    <ListItemText primary={`Pc Parts`} />
                </ListItem>
                <ListItem  disableGutters secondaryAction={
                    <IconButton>
                        <ArrowRightAlt/>
                    </IconButton>
                }>
                    <ListItemText primary={`All other Products`} />
                </ListItem>
                <ListItem  disableGutters secondaryAction={
                    <IconButton>
                        <ArrowRightAlt/>
                    </IconButton>
                }>
                    <ListItemText primary={`Repairs`} />
                </ListItem>
            </List>
            <Button variant={'outlined'} sx={{
                width:'50%',
                borderRadius:'25px',
                border: 'solid 2px #0156FF',
                margin:'auto'
            }}>Our Deals</Button>
        </>
    )
}