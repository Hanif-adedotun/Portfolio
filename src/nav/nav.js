import {React, useState} from 'react';

// Material UI components
import { AppBar, Toolbar, Button, Typography, IconButton, Menu, MenuItem} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';

// Views
import Home from '../home/home';

export default function Notification(){

     const [anchorEl, setanchorEl] = useState(null);
     const open = Boolean(anchorEl);
     
     const handleMenu = (event) =>{
          setanchorEl(event.currentTarget);
     }
     const handleClose = () => {
          setanchorEl(null);
     }
     return(
          <div>
          <AppBar position="sticky">
               <Toolbar >
                    <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                         Hanif Adedotun
                    </Typography>

                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Login</Button>

                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 2 }}
                    onClick={handleMenu}
                    >
                    <MenuIcon />
                    </IconButton>

                    <Menu id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                     >
                         <MenuItem onClick={handleClose}>Home</MenuItem>
                         <MenuItem onClick={handleClose}>About </MenuItem>
                         <MenuItem onClick={handleClose}>Contact </MenuItem>
                    </Menu>
               </Toolbar>
          </AppBar>

          <Home/>
          </div>
     )
}
