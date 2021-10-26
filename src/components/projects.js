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


// Web Logos
import StartVest from '../images/web/logo.png';
import VM from '../images/web/vm2.svg';
import NTB from '../images/web/ntb.PNG';
import Convert from '../images/web/convert.PNG';
import Khalifa from '../images/web/klf.PNG';

// Graphics Logos
import Oninure from '../images/graphics/oninure.png';
import Hanif from '../images/graphics/hanif.png';
import KD from '../images/graphics/KD.png';
import VMP from '../images/graphics/vm.png';
import MYaks from '../images/graphics/MYaks.png';
import O4P from '../images/graphics/olive4peace.png';
import Royals from '../images/graphics/Royals.png';
import SC from '../images/graphics/SC.png';
import UtilityWare from '../images/graphics/Utility.png';
import Zaithoon from '../images/graphics/zaithoon.png';


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
               'summary': 'StartVest is an equity crowdfunding platform that allows people with creative ideas to register and get funded. We provide everyone the option to invest in startups, and we also give startups the platform to post job vacancies for job seekers.',
               'tools': ['React', 'Bootstrap 4', 'Django', 'Firebase', 'REST']
          },
          2:{
               'img': VM,
               'name': ['Voltex Middleware', 'https://github.com/Hanif-adedotun/Nodejs/tree/master/voltex_react-app'],
               'summary': 'This is a tool built to automatically create forms for frontend applications, it saves and energy for creating a backend for forms only. It is easy to hook to any frontend application easily',
               'tools': ['MySql', 'MongoDB', 'Nodejs', 'React', 'Bootstrap', 'REST']
          },
          3:{
               'img': Convert,
               'name': ['Number to words Converter', 'https://hanif-adedotun.github.io/Number-Converter/'],
               'summary': 'This javascript tool converts numbers to words in Nigerian currency. This is an open source software and can be distributed and edited provided the original developer is acknowledged.',
               'tools': ['HTML', 'CSS', 'Vanilla Javascript', 'JQuery']
          },
          4:{
               'img': Khalifa,
               'name': ['Al-Kahlifa Store', 'https://hanif-adedotun.github.io/Khalifa-designs/'],
               'summary': 'A frontend desgn of an E-commerce store selling branded T-shirts to customers using the name Khalifa designs.', 
               'tools': ['HTML', 'CSS', 'Vanilla Javascript', 'JQuery']
          },
          5:{
               'img': NTB,
               'name': ['NTB Dashboard','https://github.com/Hanif-adedotun/htdocs/tree/master/NTB%20Databse'],
               'summary': '',
               'tools': ['PHP', 'MySql', 'AJAX', 'jQuery']
          }
     }    
     const graphics = [
          ['Oninure Logo', Oninure],
          ['Personal Name Logo', Hanif],
          ['Khalifa Store Logo', KD],
          ['MYaks store Banner', MYaks],
          ['Olive 4 peace logo', O4P],
          ['The Royals Logo', Royals],
          ['Startup Campus', SC],
          ['Utility Ware Staff Banner', UtilityWare],
          ['Zaithoon Academy', Zaithoon],
          ['Voltex Middleware', VMP]
     ]
         
     
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
                      fontFamily: 'quicksand',
                      font: 'x-small'
                     }
                    }}
                    textColor="#fff"
               className='tab-head'
               value={value} 
               onChange={handleChange} centered>
                    <Tab value={0} className={(value===0) ? 'tab-active':'tab-not-active'} icon={<ComputerIcon />} label="Web design" />
                    <Tab value={1} className={(value===1) ? 'tab-active':'tab-not-active'} icon={<WidgetsIcon />} label="Project design" />
                    <Tab value={2} className={(value===2) ? 'tab-active':'tab-not-active'} icon={<BrushIcon />} label="Graphics design" />
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
               <div className='coming-soon'>Coming soon....</div>
               </TabPanel>

                    {/* Graphic design tab */}
               <TabPanel value={2} index={2}>
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