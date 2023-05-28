import {React, useState, useEffect} from 'react';
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
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import WebAssetIcon from '@mui/icons-material/WebAsset';

// External content
import {applications, graphics, websites} from '../utility/projects';

function Projects(){
     useEffect(() => {
     window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        document.title = "Projects | Hanif Adedotun";
     }
     ,[]);

     const [value, setValue] = useState(Number(localStorage.getItem('nav')) || 0);

     const handleChange = (event, newValue) => {
     setValue(newValue);
     localStorage.setItem('nav', newValue);
     };


     return(
          <div>
               <span className="project-head">A view of my projects</span>

               <p className='proj-tag'> These are the projects that I have contributed to or built alone from scratch </p>

               <div className="project-tab">
               <TabContext value={value}>
               <div className="cont-tablist">
               <TabList 
               variant="scrollable"
               scrollButtons={false}
               TabIndicatorProps={{
                    style: {
                      backgroundColor: "#1DCFF6",
                      color: "#1DCFF6",
                      fontFamily: 'quicksand',
                      font: 'x-small'
                     }
                    }}
                    textColor="#fff"
               className='tab-head'
               value={value} 
               onChange={handleChange} centered>
                    <Tab value={0} className={(value===0) ? 'tab-active':'tab-not-active'} icon={<ComputerIcon />} label="Web design" />
                    <Tab value={1} className={(value===1) ? 'tab-active':'tab-not-active'} icon={<WebAssetIcon />} label="App development" />
                    <Tab value={2} className={(value===2) ? 'tab-active':'tab-not-active'} icon={<WidgetsIcon />} label="Project design" />
                    <Tab value={3} className={(value===3) ? 'tab-active':'tab-not-active'} icon={<BrushIcon />} label="Graphics design" />
               </TabList>
               </div>
                    {/* Web design section */}
               <TabPanel value={0} index={0}>
               <Grid container xs={12} justifyContent="center" spacing={5}>
                   {websites.map((v,i) => 
                    <Grid item xs={12} sm={6} key={i} className='web-container' >
                         <div className='web-img-container'>
                             {(v.img) ? <img className='web-img' src={v.img} alt={`${v.name[0]} logo`}></img> : 'Image'}
                         </div>
                         <div className='web-title'><a href={v.name[1]} target='_blank' rel="noreferrer">{v.name[0]}</a> <OpenInNewIcon/></div>
                         <div className='web-summary'>{v.summary}</div>
                         <div  className='web-year'>{Object.values(v.tools).map((tool,i) => <span key={i} className='web-tool'>{tool}</span>)}</div>
                    </Grid>
                   )}
               </Grid>
               </TabPanel>

               {/* Application development section */}
               <TabPanel value={1} index={1}>
               <Grid container xs={12} justifyContent="center" spacing={5}>
                   {applications.map((v,i) => 
                    <Grid item xs={12} sm={6} key={i} className='web-container' >
                         <div className='web-img-container'>
                             {(v.img) ? <img className={(v.name[0] === "Bluegram" ? 'blue-img':'web-img')} src={v.img} alt={`${v.name[0]} logo`}></img> : 'Image'}
                         </div>
                         <div className='web-title'><a href={v.name[1]} target='_blank' rel="noreferrer">{v.name[0]}</a> <OpenInNewIcon/></div>
                         <div className='web-summary'>{v.summary}</div>
                         <div  className='web-year'>{Object.values(v.tools).map((tool,i) => <span key={i} className='web-tool'>{tool}</span>)}</div>
                    </Grid>
                   )}
               </Grid>
               </TabPanel>

                    {/* Project design section */}
               <TabPanel value={2} index={2}>
               <div className='coming-soon'>Coming soon....</div>
               </TabPanel>

                    {/* Graphic design tab */}
               <TabPanel value={3} index={3}>
                    <Grid container xs={12} justifyContent="center" spacing={5}>
                    {graphics.map((v,i) => 
                         <Grid item xs={12} sm={6} key={i} className='graphics-container' >
                              <div className='graphics-img-container'>
                              {(v[1]) ? <img className='graphics-img' src={v[1]} alt='graphics design '></img> : 'Image'}
                              </div>
                              <div className='web-title'>{v[0]}</div>
                         </Grid>
                    )}
                    </Grid>
               </TabPanel>
               </TabContext >
               </div>
               
               {/* Footer */}
               <span id="footer-proj"><Footer/></span>
          </div>
     )
}

export default Projects;