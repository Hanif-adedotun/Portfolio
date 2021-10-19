import {React, useEffect} from 'react';
import Footer from './footer';
import '../styles/home.css';

// Scrolling text
import { TextLoop } from "react-text-loop-next";

// Materiul UI
import {Grid} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

// My picture
import Hanif from '../images/hanif.jpg';

// SVG Icons
import Divider from '../images/divider.svg';
import Person from '../images/icons/person2.svg';
import Books from '../images/icons/books.svg';
import Worker from '../images/icons/work.svg';

function App() {
  useEffect(() => 
     window.scrollTo({
          top: 0,
          // behavior: "smooth"
        })
     ,[]);

  const summary = [
    'I am a technology enthusiast, a fast learner and I have a never ending quest to learn new things everyday. I work well with people and I pay great attention to details.',
    'I am a full stack developer and a graphics designer.I am currently researching on Machine learning, Blockchain technology and the Internet of Things.',
    'I have been programming for about 3 years, during which i have developed projects which are available on my GitHub account below.'
  ]
  const skills = ['Javascript', 'React', 'PHP', 'MySql', 'MongoDB', 'Figma', 'Python', 'Machine Learning'];

  const education = {
    1:{
      'ongoing': true,
      'time': '2019-2024',
      'title': 'BSc. Computer Engineering',
      'org': ['Nile university of Nigeria', 'https://www.nileuniversity.edu.ng/'],
    },
    2:{
      'ongoing': false,
      'time': '2016-2019',
      'title': 'Sec. School leaving certificate',
      'org': ['Glisten International Academy', 'https://glisteninternationalacademy.com/secondary-school/'],
    },

  }
  const experiences = {
    1:{
      'time': '2021-Present',
      'title': 'Development Lead - AI & ML',
      'org': ['Google Developer Student Club - Nile University Chapter', 'https://www.nileuniversity.edu.ng/'],
    },
    2:{
      'time': 'Mar 2021 - Sep 2021',
      'title': 'Internship',
      'org': ['Utility ware', 'https://www.linkedin.com/company/utility-ware/'],
    }
  }
  return (
    <div className='home-cont'>

      <div className="App">
       
        <div className='home-main'>
        
            <h2>Hello, I'm <span className="text-contrast"> Hanif</span></h2>


          <div className='home-main-loop'>
              I am somewhere between <TextLoop 
              interval={2500} 
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
              <Grid container md={6} xs={12} justifyContent="center" className='profile-image-container'>
                <div className='profile-image'><img src={Hanif} alt='A potrait of me' className='image'/></div>
              </Grid>

              <Grid container md={4} xs={9} justifyContent="center" className='profile-skills'>
                <Grid item xs={12}><span className='skills-head'>My Top Skills</span></Grid>
                {skills.map((skill,i) =>
                  <Grid item xs={5}  justifyContent="center" className='skill-container'>
                     <div className={'skill-name'}>{skill}</div>
                  </Grid>
                )}               
                  <Grid item xs={12}><span className='skills-footer'>...and of course HTML and CSS</span></Grid>
              </Grid>
          </Grid>

          <span className='divider-container'><img src={Divider} alt='divider' className='divider'/></span>

            {/* Me section */}
            <div className='section'>
              <Grid container justifyContent="center" alignItems='center'>
                <Grid Item md={6}  xs={12} >
                  <h2 className='skills-head'>Who I am</h2>
                  {summary.map((v,i) => 
                    <div className='profile-summary'>{v}</div>
                  )}
                </Grid>

                <Grid Item md={6}  xs={12}>
                      <img src={Person} alt='A person SVG Icon' className='person-icon'/> 
                </Grid>
              </Grid>
          </div>

          {/* Education section */}
          <div className='section'>
          <h2 className='skills-head'>Education</h2>
          <Grid container justifyContent="center" alignItems='center'>
            <Grid Item container sm={6} xs={12} >
              {(Object.values(education).map((edu,i) => 
                <div className='card-container' key={i}>
                  <Grid container >
                    <Grid Item  xs={3}><div className='card-icon'><SchoolIcon color='inherit' fontSize='large'/></div></Grid>
                    <Grid Item  xs={9} justifyContent="center" className='card-text'>
                      <span className='card-time'>{edu.time} {(edu.ongoing) ? <span className='ongoing'>Ongoing...</span>:''}</span>
                      <span className='card-title'>{edu.title}</span>
                      <span className='card-org'><a href={edu.org[1]} target='_blank' rel="noreferrer">{edu.org[0]}</a></span>
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
           <h2 className='skills-head'>Work Experience</h2>
          <Grid container justifyContent="center" alignItems='center'>

            <Grid Item  sm={6} xs={12}>
                  <img src={Worker} alt='A worker SVG Icon' className='worker-icon'/> 
            </Grid>
            
            <Grid Item container sm={6} xs={12} >
              {(Object.values(experiences).map((edu,i) => 
                <div className='card-container' key={i}>
                  <Grid container >
                    <Grid Item  xs={3} sm={2}><div className='card-icon'><WorkIcon color='inherit' fontSize='large'/></div></Grid>
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
