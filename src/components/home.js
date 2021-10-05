import React from 'react';
import Footer from './footer';
import '../styles/home.css';

// Scrolling text
import { TextLoop } from "react-text-loop-next";

import {Grid} from '@mui/material';

function App() {
  const skills = {
    1: ['Javascript', 'React'],
    2: ['PHP', 'MySql'],
    3: ['MongoDB', 'Figma']
  }
  return (
    <div className='home-cont'>

      <div className="App">
          {/* <img src={Home_bg} alt='' className='bg'/> */}
        
        <div className='home-main'>
        
            <h2>Hello, I'm <span className="text-contrast"> Hanif</span></h2>


          <div className='home-main-loop'>
              I am somewhere between <TextLoop 
              interval={3000} 
              adjustingSpeed={500} 
              springConfig={{ stiffness: 120, damping: 20 }}
              className='home-text-loop'
              children={[
                "a Full Stack Developer",
                "a Graphics Designer",
                "an Engineering Student",
                "a Machine Learning enthusiast",
                "a Blockchain advocate"
              ]}/>           
          </div>

        </div> 
      </div>
        
        <div className='skills-section'>
          
          <div className='skills-eulogy'>I’ll probably be the shortest person in a room, 
            but trust me not in knowledge...
          </div>

          <Grid container justifyContent="center"  className='profile-container'>
              <Grid container  sm={6} xs={12} justifyContent="center" className='profile-image-container'>
                <div className='profile-image'></div>
              </Grid>

              <Grid container  sm={4} xs={12} spacing={2} justifyContent="center" className='profile-skills'>
                <span className='skills-head'>My Top Skills</span>
                {Object.values(skills).map((skill,i) =>
                  <Grid container item xs={10}  spacing={5} justifyContent="center">
                    {Object.values(skill).map((v,i) =>
                      <Grid item xs={5}><div className={'skill-name'}>{v}</div></Grid>
                    )}
                  </Grid>
                )}
                  <span className='skills-footer'>...and of course HTML and CSS</span>
              </Grid>
          </Grid>

               {/* Footer */}
                <Footer/>
        </div>
     
    </div>
  );
}

export default App;
