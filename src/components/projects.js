import {React, useState} from 'react';
import Footer from './footer';
import '../styles/projects.css'
// Material UI 
import {Tab, Grid} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BrushIcon from '@mui/icons-material/Brush';
import ComputerIcon from '@mui/icons-material/Computer';
import WidgetsIcon from '@mui/icons-material/Widgets';


function Projects(){
     const [value, setValue] = useState(0);

     const handleChange = (event, newValue) => {
     setValue(newValue);
     };

     
     return(
          <div>
               <span className="project-head">A view of my projects</span>

               <p className='proj-tag'> These are the projects that I have contributed to or built alone from scratch </p>

               <div className="project-tab">
               <TabContext value={value}>
               <TabList 
               TabIndicatorProps={{
                    style: {
                      backgroundColor: "#1DCFF6",
                      color: "#1DCFF6"
                     }
                    }}
                    textColor="#fff"
               className='tab-head'
               value={value} 
               onChange={handleChange} centered>
                    <Tab value={0} className={(value===0) ? 'tab-active':''} icon={<ComputerIcon />} label="Web design" />
                    <Tab value={1} className={(value===1) ? 'tab-active':''} icon={<WidgetsIcon />} label="Project design" />
                    <Tab value={2} className={(value===2) ? 'tab-active':''} icon={<BrushIcon />} label="Graphics design" />
               </TabList>

               <TabPanel value={0} index={0}>
               <Grid container xs={12} justifyContent="center" spacing={5}>
                   {/* {Object.values(certificates).map((v,i) =>  */}
                    <Grid item xs={12} sm={6} key={1} className='certificates-container' >
                         <div className='certificates-img-container'>
                              'Image'
                             {/* {(v.img) ? <img className='cert-img' src={v.img} alt='Certificate snapshot'></img> : 'Image of certificate'} */}
                         </div>
                         <div className='certificates-title'><a href={'v.link'} target='_blank' rel="noreferrer">{'v.name'}</a></div>
                         <div className='certificates-org'>{'v.org'}</div>
                         <div  className='certificates-year'>{'v.year'}</div>
                    </Grid>
                   {/* )} */}
               </Grid>
               </TabPanel>

               <TabPanel value={1} index={1}>
               Item Two
               </TabPanel>

               <TabPanel value={2} index={2}>
               Item Three
               </TabPanel>
               </TabContext >
               </div>
               {/* Footer */}
               <Footer/>
          </div>
     )
}

export default Projects;