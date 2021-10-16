import React from 'react';
import Footer from './footer';
import '../styles/home.css';

// Scrolling text
import { TextLoop } from "react-text-loop-next";

// Materiul UI
import {Grid} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

// SVG Icons
import Divider from '../images/divider.svg';
import Person from '../images/icons/person2.svg';
import Books from '../images/icons/books.svg';
import Worker from '../images/icons/work.svg';

function App() {
  const skills = {
    1: ['Javascript', 'React'],
    2: ['PHP', 'MySql'],
    3: ['MongoDB', 'Figma'],
    4: ['Python']
  }
  const education = {
    1:{
      'ongoing': true,
      'time': '2019-2024',
      'title': 'Bsc. Computer Engineering',
      'org': ['Nile university of Nigeria', 'https://www.nileuniversity.edu.ng/'],
    }
  }
  const experiences = {
    1:{
      'time': '2021-Present',
      'title': 'Development Lead - AI & ML',
      'org': ['Google Deleper Student Club - Nile University', 'https://www.nileuniversity.edu.ng/'],
    }
  }
  return (
    <div className='home-cont'>

      <div className="App">
       
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

          <span className='divider-container'><img src={Divider} alt='divider' className='divider'/></span>

            {/* Me section */}
            <div className='section'>
              <Grid container justifyContent="center" alignItems='center'>
                <Grid Item  sm={6} xs={12} >
                <h2>Who I am</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh urna metus vulputate quam mauris sagittis. Non morbi cras nisl vel. Enim iaculis vel massa arcu quis arcu, nunc, ullamcorper. Donec tincidunt platea vestibulum suspendisse est vitae. Nec, at nulla consectetur pharetra ultricies dui id. Sit nascetur habitant vel nisi,</p>
                </Grid>

                <Grid Item  sm={6} xs={12}>
                      <img src={Person} alt='A person SVG Icon' className='person-icon'/> 
                </Grid>
              </Grid>
          </div>

          {/* Education section */}
          <div className='section'>
          <h2>Education</h2>
          <Grid container justifyContent="center" alignItems='center'>

            <Grid Item container sm={6} xs={12} >
              {(Object.values(education).map((edu,i) => 
                <div className='card-container' key={i}>
                  <Grid container >
                    <Grid Item  xs={3}><div className='card-icon'><SchoolIcon color='inherit' fontSize='large'/></div></Grid>
                    <Grid Item  xs={9} justifyContent="center" className='card-text'>
                      <span className='card-time'>{edu.time} {(edu.ongoing) ? <span className='ongoing'>Ongoing...</span>:''}</span>
                      <span className='card-title'>{edu.title}</span>
                      <span className='card-org'>{edu.org[0]}</span>
                    </Grid>
                  </Grid>
                </div>
                ))}
          </Grid>  

            <Grid Item  sm={6} xs={12}>
                  <img src={Books} alt='Books SVG Icon' className='books-icon'/> 
            </Grid>
          </Grid>
          </div>


           {/* Work section */}
           <div className='section'>
           <h2>Work Experience</h2>
          <Grid container justifyContent="center" alignItems='center'>

            <Grid Item  sm={6} xs={12}>
                  <img src={Worker} alt='A worker SVG Icon' className='worker-icon'/> 
            </Grid>
            
            <Grid Item container sm={6} xs={12} >
              {(Object.values(experiences).map((edu,i) => 
                <div className='card-container' key={i}>
                  <Grid container >
                    <Grid Item  xs={3}><div className='card-icon'><WorkIcon color='inherit' fontSize='large'/></div></Grid>
                    <Grid Item  xs={9} justifyContent="center" className='card-text'>
                      <span className='card-time'>{edu.time}</span>
                      <span className='card-title'>{edu.title}</span>
                      <span className='card-org'>{edu.org[0]}</span>
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
