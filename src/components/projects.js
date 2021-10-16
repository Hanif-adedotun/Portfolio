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

     const websites={
          1:{
               'name': ['StartVest','https://startvest.io'],
               'summary': 'This is a brief Summary of  how the projects work, the problem they are solving  as well as the progress on them.',
               'tools': ['React', 'Bootstrap 4', 'Django', 'Firebase', 'REST api']
          }
     }    
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
                   {Object.values(websites).map((v,i) => 
                    <Grid item xs={12} sm={6} key={1} className='web-container' >
                         <div className='web-img-container'>
                              'Image'
                             {/* {(v.img) ? <img className='cert-img' src={v.img} alt='Certificate snapshot'></img> : 'Image of certificate'} */}
                         </div>
                         <div className='web-title'><a href={v.name[1]} target='_blank' rel="noreferrer">{v.name[0]}</a></div>
                         <div className='web-summary'>summary</div>
                         <div  className='web-year'>{Object.values(v.tools).map((tool,i) => <span key={i} className='web-tool'>{tool}</span>)}</div>
                    </Grid>
                   )}
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
               <span id="footer-proj"><Footer/></span>
          </div>
     )
}

export default Projects;