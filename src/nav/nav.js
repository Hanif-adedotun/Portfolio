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
       styled} from '@mui/material';

import { Dialog } from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';

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
import Contact from '../components/contact';
import Certifications from '../components/certifications';
import Blog from '../components/blog';
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
     const ismobile = useMediaQuery(theme.breakpoints.down('750'))
       
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
                    <div className='nav-links-container'>
                    <Button color="inherit"><NavLink to='/projects' className='nav-links' activeClassName="nav-links-active">Projects</NavLink></Button>
                    <Button color="inherit"><NavLink to='/resume' className='nav-links' activeClassName="nav-links-active">Resume</NavLink></Button>
                    <Button color="inherit"><NavLink to='/certificates' className='nav-links' activeClassName="nav-links-active">Certifications</NavLink></Button>
                    <Button color="inherit"><NavLink to='/blog' className='nav-links' activeClassName="nav-links-active">Blog</NavLink></Button>
                    <Button sx={{boxShadow: 4}} className='nav-link-contact' variant='contained' onClick={handleOpen}>Contact me</Button>
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
                         <Button onClick={handleDrawerToggle}><NavLink to='/' className='nav-links' activeClassName="nav-links-active">Home</NavLink></Button>
                    </ListItem>

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
                         <Button onClick={handleDrawerToggle}><NavLink to='/blog' className='nav-links' activeClassName="nav-links-active">Blog</NavLink></Button>
                    </ListItem>

                    <ListItem>
                         <Button sx={{boxShadow: 2}} onClick={() => {handleDrawerToggle(); handleOpen()}} className='nav-link-contact' variant='contained'>Contact me</Button>
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
                    <Route exact path="/blog"><Blog/></Route>
                    <Route><NotFound/></Route>
               </Switch>
               </div>

          </HashRouter>

          {/* Modal for Contact me */}
          <Dialog 
          open={open}
          onClose={handleClose}
          className={'contact-modal'}
          BackdropComponent={Backdrop}
          >
               <Contact onClose={handleClose}/>
          </Dialog>
          </div>
     )
}

export default Navigation; 
