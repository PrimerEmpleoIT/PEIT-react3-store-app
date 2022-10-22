import { ArrowRightAlt } from "@mui/icons-material";
import { Box, List , ListItem,IconButton,ListItemText} from "@mui/material";


export default function InfoMenu(){
    return(
        <Box component={"nav"} sx={{
            width: '100%',
            display: 'flex',
            backgroundColor: '#FFFFFF'
        }}>
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
        </Box>
    )
}