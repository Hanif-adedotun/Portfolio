import React from 'react';

// Material UI components
import { AppBar, Toolbar, IconButton, Typography} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';

// Views
import Home from '../home/home';

export default function Notification(){

     return(
          <div>
          <AppBar position="sticky">
          <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
               <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
               Hanif Adedotun
          </Typography>
          </Toolbar>
          </AppBar>

          <Home/>
          </div>
     )
}
