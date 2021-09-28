import {React, useState} from 'react';
import '../styles/nav.css';
// Material UI components
import { AppBar, 
     Toolbar,
      Button,
       Typography, 
       IconButton, 
       List, 
       ListItem,  
       Drawer, 
       useTheme,
       useMediaQuery,
       Box, styled} from '@mui/material';

import ModalUnstyled from '@mui/core/ModalUnstyled';
import {Menu as MenuIcon} from '@mui/icons-material';

// React router dom
import {
     HashRouter,
     Switch,
     Route,
     Link,
     useLocation
   } from "react-router-dom";

// Views
import Home from '../components/home';
import Resume from '../components/resume';
import Footer from '../components/footer';

// Backdrop for the modal dialog
const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const Navigation = (props) => {
     // let location = useLocation();
     const [DrawerOpen, setDrawerOpen] = useState(false);

     const handleDrawerToggle = () => {
          setDrawerOpen(!DrawerOpen);
     };

     const theme = useTheme();
     const ismobile = useMediaQuery(theme.breakpoints.down('sm'))
       

     // Modal Functions
     const[open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

     return(
          <div>
          <HashRouter basename='/'>
          <AppBar position="sticky">
               <Toolbar >
                    <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                         Hanif Adedotun
                    </Typography>

                    {(ismobile) ? 
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 2 }}
                    onClick={handleDrawerToggle}
                    >
                    <MenuIcon />
                    </IconButton>
                    :
                    <div>
                    <Button color="inherit"><Link to='/resume'>Projects</Link></Button>
                    <Button color="inherit"><Link to='/resume'>Resume</Link></Button>
                    <Button color="inherit">Certifications</Button>
                    <Button variant='contained' onClick={handleOpen}>Contact me</Button>
                    </div>
                    }
               </Toolbar>
          </AppBar>


          <Drawer
          anchor='right'
          variant="temporary"
          open={DrawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          <div>
               <List>
                    <ListItem>
                         <Button>Projects</Button>
                    </ListItem>

                    <ListItem>
                         <Button>Resume</Button>
                    </ListItem>

                    <ListItem>
                         <Button>Certifications</Button>
                    </ListItem>

                    <ListItem>
                         <Button onClick={() => {handleDrawerToggle(); handleOpen()}}>Contact me</Button>
                    </ListItem>
               </List>
          </div>
        </Drawer>
          
          {/* All Components come here */}
          
               <Switch >
                    <Route exact path="/"><Home/></Route>
                    <Route exact path="/resume"><Resume/></Route>
               </Switch>
          

          {/* Modal for Contact me */}
          <ModalUnstyled 
          open={open}
          onClose={handleClose}
          className={'contact-modal'}
          BackdropComponent={Backdrop}
          >
          
               <Box className={'contact-modal-box'}>
                    <h2 id="unstyled-modal-title">Text in a modal</h2>
                     <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>
                </Box>
          </ModalUnstyled>

          {/* Footer */}
          <Footer/>

          </HashRouter>
          </div>
     )
}

export default Navigation; 
