import {React, useEffect} from 'react';
import Footer from './footer';
import '../styles/home.css';
import Typewriter from 'typewriter-effect';

// Technologies
import {technologies} from '../utility/technologies';

// Scrolling text
import { TextLoop } from "react-text-loop-next";

// Anmation
import {Slide} from "react-awesome-reveal";

import {Link} from "react-router-dom";

// Materiul UI
import {Grid, Button} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

// My picture
import {education, summary, experiences} from '../utility/aboutme';

// SVG Icons
import Divider from '../images/divider.svg';
import Worker from '../images/icons/work.svg';


function App() {
  useEffect(() => {
     window.scrollTo({
          top: 0,
          // behavior: "smooth"
        });
        document.title = "Portfolio | Hanif Adedotun";
  }
     ,[]);

  const HanifImages = [
    '/hanif.jpg',
    '/hanif.png',
    '/hanif2.jpg'
  ]
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  return (
    <div className='home-cont'>

      <div className="App">
       
        <div className='home-main'>

          <img src='/home_avatar.svg' className='home_image' alt="Hanif's alter ego"/>
        
          <div>
            <p className='intro-text'>Hey, I am Hanif Adedotun👋</p>   
            <img src="/assets/scratch.svg" width={'100px'} alt="Scratch" className='scratch'/>
          </div>

          {/* <h2><span className="text-contrast"> Hanif</span></h2> */}
              
          
            <div ClassName='home-tex-loop'>
              <Typewriter   
                  onInit={(typewriter) => {
                    typewriter
                    .typeString("Full Stack Developer")
                    .pauseFor(300)
                    .deleteAll()

                    .typeString("Community Lead")
                    .pauseFor(300)
                    .deleteAll()
                    .start();
                  }}
                  options={{loop: true, skipAddStyles:true}}
                />
              </div>
              {/* <TextLoop 
              interval={3000} 
              adjustingSpeed={500} 
              springConfig={{ stiffness: 120, damping: 1 }}
              className='home-text-loop'
              children={[
                "Full Stack Developer",
                "Community Lead",
                "Graphics Designer",
                "Engineering Student",
                "Machine Learning enthusiast",
                "Web3 believer"
              ]}/>            */}
          

          <Link to='/resume'> 
            <Button variant="outlined" className='resume-button' >
             My resume
            </Button>
          </Link>

        </div> 
      </div>
        <div className='skills-section'>
          
          <Grid container justifyContent="center" alignItems={"center"}  className='profile-container'>
            
              <Grid item md={5} xs={12} justifyContent="center"  className='profile-image-container'>
               <Slide direction='left'>
               <div className='profile-image-card1'>
                  <div className='profile-image-card2'>
                    <div className='profile-image'>
                      <img src={HanifImages[getRndInteger(0, HanifImages.length)]} alt='A potrait of me' className='image'/>
                    </div>
                  </div>
                </div>
                </Slide>
              </Grid>
              

              <Grid container item md={6} xs={9} justifyContent="center" className='profile-skills'>
                {/* <Grid item xs={12}><span className='skills-head'>Who is Hanif?</span></Grid> */}
                <h2 className='skills-head'>Who I am</h2>
                  <Slide direction='up' triggerOnce>
                    {summary.map((v,i) => 
                      <div className='profile-summary' key={i}>{v}</div>
                    )}
                  </Slide>

                {/* {skills.map((skill,i) =>
                  <Grid item xs={5}  justifyContent="center" className='skill-container' key={i}>
                    <Slide direction='up' cascade >
                     <div className={`skill-name ${(i%2===0) ? 'skill-name-alt': ''}`}>{skill}</div>
                     </Slide>
                  </Grid>
                )}               
                  <Grid item xs={12}><span className='skills-footer'>...and of course HTML and CSS</span></Grid> */}
              </Grid>
          </Grid>

          <span className='divider-container'><img src={Divider} alt='divider' className='divider'/></span>

            {/* Me section */}
            {/* <div className='section'>
              <Grid container justifyContent="center" alignitems='center'>
                <Grid item md={6}  xs={12} >
                  <h2 className='skills-head'>Who I am</h2>
                  {summary.map((v,i) => 
                    <div className='profile-summary' key={i}>{v}</div>
                  )}
                </Grid>

                <Grid item md={6}  xs={12}>
                <Slide direction="right">
                      <div className='img-cover-1'>
                        <img src={Person} alt='A person SVG Icon' className='person-icon'/> 
                      </div>
                </Slide>
                </Grid>
              </Grid>
          </div> */}

          {/* technologies section */}
          <div className='section tech-section'>
            <h2>Technologies I work with</h2>
            <Grid container columnSpacing={2}  rowSpacing={12} className="tech-section-container" justifyContent="space-around">
            {technologies.map((categories,i) =>
                  <Grid item xs={10} md={5}   key={i}>
                    <h2>{categories.title}</h2>
                    <Grid container spacing={1} justifyContent="center" className='tech-section-icons'>
                      {categories.stack.map((tech, i) => 
                        <Grid item xs={3} >
                        <img src={tech} key={i} height={'25px'} alt="tech"/>
                        </Grid>
                      )}
                    </Grid>
                    
                  </Grid>
                )} 
            </Grid>
          </div>

          {/* Education section */}
          <div className='section'>
            <h2 className='skills-head'>Education</h2>
            <Grid container justifyContent="center" alignitems='center'>
                {(Object.values(education).map((edu,i) => 
              
                  // <div className='card-container' key={i}>
                    
                    <Grid container sm={6} xs={12} className='card-container'>
                      <Grid item  xs={3} justifyContent="center"><div className='card-icon'><SchoolIcon color='inherit' fontSize='large'/></div></Grid>
                      <Grid item  xs={9} justifyContent="center" className='card-text'>
                        
                        <span className='card-time'>{edu.time} {(edu.ongoing) ? <span className='ongoing'>Ongoing...</span>:''}</span>
                        <span className='card-title'>{edu.title}</span>
                        <span className='card-org'><a href={edu.org[1]} target='_blank' rel="noreferrer">{edu.org[0]}</a></span>
                      
                      </Grid>
                    </Grid>
                  
                  // </div>
            
                  ))}
            </Grid>
            <div className='timeline-bar'></div>
          </div>


           {/* Work section */}
           <div className='section'>
           <h2 className='skills-head'>Work Experience</h2>
          <Grid container justifyContent="center" alignitems='center'>

            
            <Grid item  sm={6} xs={12}>
                <Slide direction="left">
                  <img src={Worker} alt='A worker SVG Icon' className='worker-icon'/> 
                </Slide>
            </Grid>
           
            
            <Grid item container sm={6} xs={12} >
              {(Object.values(experiences).map((work,i) => 
             
                <div className='card-container' key={i}>
                  <Grid container justifyContent="flex-start">
                    <Grid item  xs={3} sm={2}><div className='card-icon'><WorkIcon color='inherit' fontSize='large'/></div></Grid>
                    <Grid item  xs={9} justifyContent="flex-start" className='card-text'>
                      <span className='card-time'>{work.time}</span>
                      <span className='card-title'>{work.title}</span>
                      <span className='card-org'><a href={work.org[1]} target='_blank' rel="noreferrer">{work.org[0]}</a></span>
                      <span className='card-desc'>{work.desc}</span>
                    </Grid>
                  </Grid>
                </div>
                
                ))}

            </Grid>    
          </Grid>
          </div>
       
               {/* Footer */}
                <Footer/>
        </div>
     
    </div>
  );
}

export default App;
