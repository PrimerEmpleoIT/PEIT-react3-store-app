import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StoreIcon from '@mui/icons-material/Store';
import Link from 'next/link';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Laptops', 'Desktop PCs', 'Networking Devices','Printers & Scanners','PC Parts','All Other Products','Repairs'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <Box sx={{display:'flex', justifyContent:'space-between',padding:'10px'}}>
        <StoreIcon htmlColor='#0156FF' fontSize='large' />
        <CloseIcon onClick={handleDrawerToggle} fontSize='large'sx={{cursor:'pointer'}}/>
      </Box>
      <hr></hr>
      <List sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',padding:'10px'}}>
        {navItems.map(item=>{
          return(<Link href=''><a style={{color:'#000',textDecoration:'none'}}>{item}</a></Link>)
        })}
        <Button sx={{borderRadius:'25px'}} variant='outlined'> Our Deals</Button>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',alignItems:'center',width:'100%' }}>
      <AppBar sx={{backgroundColor: 'primary.header',width:'100%'}} position='relative' component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <input style={{width:'80%',borderRadius:'25px',border:'none',padding:'.3rem',marginRight:'.5rem'}}></input>
          <LocalGroceryStoreIcon fontSize='medium'/>
          <AccountCircleIcon fontSize='medium'/>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}