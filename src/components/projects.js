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


// Logos
import StartVest from '../images/logo.png';
import Oninure from '../images/graphics/oninure.png';

function Projects(){
     useEffect(() => {
     window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
     }
     ,[]);

     const [value, setValue] = useState(Number(localStorage.getItem('nav')) || 0);

     const handleChange = (event, newValue) => {
     setValue(newValue);
     localStorage.setItem('nav', newValue);
     };

     const websites={
          1:{
               'img': StartVest,
               'name': ['StartVest','https://startvest.io'],
               'summary': 'This is a brief Summary of  how the projects work, the problem they are solving  as well as the progress on them.',
               'tools': ['React', 'Bootstrap 4', 'Django', 'Firebase', 'REST']
          },
          2:{
               'img': false,
               'name': ['Voltex Middleware', 'https://github.com/Hanif-adedotun/Nodejs/tree/master/voltex_react-app'],
               'summary': 'This is a tool built to automatically create forms for frontend applications, it saves and energy for creating a backend for forms only. It is easy to hook to any frontend application easily',
               'tools': ['MySql', 'MongoDB', 'Nodejs', 'React', 'Bootstrap', 'REST']
          },
          3:{
               'img': false,
               'name': ['Number to words Converter', 'https://hanif-adedotun.github.io/Number-Converter/'],
               'summary': 'This javascript tool converts numbers to words in Nigerian currency. This is an open source software and can be distributed and edited provided the original developer is acknowledged.',
               'tools': ['HTML', 'CSS', 'Vanilla Javascript', 'JQuery']
          },
          4:{
               'img': false,
               'name': ['E commerce store', 'https://hanif-adedotun.github.io/Khalifa-designs/'],
               'summary': 'A frontend desgn of an E-commerce store selling branded T-shirts to customers using the name Khalifa designs.', 
               'tools': ['HTML', 'CSS', 'Vanilla Javascript', 'JQuery']
          },
          5:{
               'img': false,
               'name': ['NTB Dashboard','https://github.com/Hanif-adedotun/htdocs/tree/master/NTB%20Databse'],
               'summary': '',
               'tools': ['PHP', 'MySql', 'AJAX', 'jQuery']
          }
     }    
     const graphics ={
          1:{
               'name': 'Oninure Logo',
               'img': Oninure,
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
                      color: "#1DCFF6",
                      fontFamily: 'quicksand'
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

                    {/* Web design section */}
               <TabPanel value={0} index={0}>
               <Grid container xs={12} justifyContent="center" spacing={5}>
                   {Object.values(websites).map((v,i) => 
                    <Grid item xs={12} sm={6} key={i} className='web-container' >
                         <div className='web-img-container'>
                             {(v.img) ? <img className='web-img' src={v.img} alt={`${v.name[0]} logo`}></img> : 'Image'}
                         </div>
                         <div className='web-title'><a href={v.name[1]} target='_blank' rel="noreferrer">{v.name[0]}</a></div>
                         <div className='web-summary'>{v.summary}</div>
                         <div  className='web-year'>{Object.values(v.tools).map((tool,i) => <span key={i} className='web-tool'>{tool}</span>)}</div>
                    </Grid>
                   )}
               </Grid>
               </TabPanel>

                    {/* Project design section */}
               <TabPanel value={1} index={1}>
               Item Two
               </TabPanel>

                    {/* Graphic design tab */}
               <TabPanel value={2} index={2}>
                    <Grid container xs={12} justifyContent="center" spacing={5}>
                    {Object.values(graphics).map((v,i) => 
                         <Grid item xs={12} sm={6} key={i} className='graphics-container' >
                              <div className='graphics-img-container'>
                              {(v.img) ? <img className='graphics-img' src={v.img} alt='graphics design '></img> : 'Image'}
                              </div>
                              <div className='web-title'>{v.name}</div>
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