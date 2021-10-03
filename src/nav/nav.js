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
       Grid, 
       Box, styled} from '@mui/material';

import ModalUnstyled from '@mui/core/ModalUnstyled';
import {Menu as MenuIcon, CloseOutlined} from '@mui/icons-material';

// React router dom
import {
     HashRouter,
     Switch,
     Route,
     NavLink,
     Link
   } from "react-router-dom";

// Views
import Home from '../components/home';
import Resume from '../components/resume';
import Projects from '../components/projects';
import Certifications from '../components/certifications';
import NotFound from '../components/404';

// Backdrop for the modal dialog
const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(12, 24, 36, 0.9);
  -webkit-tap-highlight-color: transparent;
  backdrop-filter: saturate(120%) blur(2px) ;
`;


const Navigation = (props) => {
     // let location = useLocation();
     const [DrawerOpen, setDrawerOpen] = useState(false);

     const handleDrawerToggle = () => {
          setDrawerOpen(!DrawerOpen);
     };

     const theme = useTheme();
     const ismobile = useMediaQuery(theme.breakpoints.down('700'))
       

     // Modal Functions
     const[open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

     return(
          <div className="nav">
          <HashRouter basename='/'>
          <AppBar position="sticky" className="nav-appBar" elevation={0}>
               <Toolbar className='nav-toolbar'>
                    <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1, textAlign:'left' }}>
                         <Link to='/' className='nav-head-text'>Hanif Adedotun</Link>
                    </Typography>

                    {(ismobile) ? 
                    <IconButton
                    size="900"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 2 }}
                    onClick={handleDrawerToggle}
                    >
                    <MenuIcon/>
                    </IconButton>
                    :
                    <div>
                    <Button color="inherit"><NavLink to='/projects' className='nav-links' activeClassName="nav-links-active">Projects</NavLink></Button>
                    <Button color="inherit"><NavLink to='/resume' className='nav-links' activeClassName="nav-links-active">Resume</NavLink></Button>
                    <Button color="inherit"><NavLink to='/certificates' className='nav-links' activeClassName="nav-links-active">Certifications</NavLink></Button>
                    <Button className='nav-link-contact' variant='contained' onClick={handleOpen}>Contact me</Button>
                    </div>
                    }
               </Toolbar>
          </AppBar>


          <Drawer
          anchor='right'
          variant="temporary"
          open={DrawerOpen}
          onClose={handleDrawerToggle}
          transitionDuration={700}
          className={'nav-drawer'}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          <div  className={'nav-drawer-div'}>
               <List>
                    <ListItem>
                         <Button onClick={handleDrawerToggle}><NavLink to='/projects' className='nav-links' activeClassName="nav-links-active">Projects</NavLink></Button>
                    </ListItem>

                    <ListItem>
                         <Button onClick={handleDrawerToggle}><NavLink to='/resume' className='nav-links' activeClassName="nav-links-active">Resume</NavLink></Button>
                    </ListItem>

                    <ListItem>
                         <Button onClick={handleDrawerToggle}><NavLink to='/certificates' className='nav-links' activeClassName="nav-links-active">Certifications</NavLink></Button>
                    </ListItem>

                    <ListItem>
                         <Button onClick={() => {handleDrawerToggle(); handleOpen()}} className='nav-link-contact' variant='contained'>Contact me</Button>
                    </ListItem>
               </List>
          </div>
        </Drawer>
          
          {/* All Components come here */}
               <div >
               <Switch >
                    <Route exact path="/"><Home/></Route>
                    <Route exact path="/resume"><Resume/></Route>
                    <Route exact path="/projects"><Projects/></Route>
                    <Route exact path="/certificates"><Certifications/></Route>
                    <Route><NotFound/></Route>
               </Switch>
               </div>

          </HashRouter>

          {/* Modal for Contact me */}
          <ModalUnstyled 
          open={open}
          onClose={handleClose}
          className={'contact-modal'}
          BackdropComponent={Backdrop}
          >
               <Box className={'contact-modal-box'}>

               <Grid container spacing={2}>
                    <Grid item xs>
                         <h2 >Text in a modal</h2>
                    </Grid>  

                    <Grid item xs={2}>
                         <IconButton onClick={handleClose}>
                          <CloseOutlined />
                    </IconButton>
                    </Grid>  
               </Grid>
         
                     <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>
                </Box>
          </ModalUnstyled>
          </div>
     )
}

export default Navigation; 
