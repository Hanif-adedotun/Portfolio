import {React, useEffect} from 'react';
import Footer from './footer';
import '../styles/home.css';

// Scrolling text
import { TextLoop } from "react-text-loop-next";

// Anmation
import {Slide} from "react-awesome-reveal";

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
  useEffect(() => {
     window.scrollTo({
          top: 0,
          // behavior: "smooth"
        });
        document.title = "Portfolio | Hanif Adedotun";
  }
     ,[]);

  // const summary = [
  //   'I am a technology enthusiast, a fast learner and I have a never ending quest to learn new things everyday. I work well with people and I pay great attention to details.',
  //   'I am a full stack developer and a graphics designer.I am currently researching on Machine learning, Blockchain technology and the Internet of Things.',
  //   'I have been programming for about 3 years, during which I have developed projects which are available on my GitHub account below.'
  // ]
  const summary =[
    'Hey! I am Hanif, I love everything technology and how its used to solve problems.',
    'I am a technology enthusiast, a fast learner and I have a never ending quest to learn new things everyday. I work well with people and I pay great attention to details.',
    'My journey into tech started about 5 years ago, from graphics designs to creating websites with html and css, to creating my first full stack project 2 years ago and then recently transitioning into machine learning and A.I it\'s importance in shaping future technologies and how we can use it to accelerate our growth as a nation and continent at large.',
    'I am currently building a startup that helps in democratising early stage startup funding in Nigeria and giving opportunities to small businesses and enterprises.',
  ]
  const skills = ['Javascript', 'React', 'PHP', 'C++', 'Nodejs','MySql', 'MongoDB', 'Figma', 'Python', 'Machine Learning'];

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
      'title': 'Secondary School certificate',
      'org': ['Glisten International Academy', 'https://glisteninternationalacademy.com/secondary-school/'],
    },

  }
  const experiences = {
    1:{
      'time': '2021 - Present',
      'title': 'Development Lead - AI & ML',
      'org': ['Google Developer Student Club - Nile University Chapter', 'https://www.nileuniversity.edu.ng/'],
    },
    2:{
      'time': 'Mar 2021 - Sep 2021',
      'title': 'Full stack web developer - Internship',
      'org': ['Utility ware', 'https://www.linkedin.com/company/utility-ware/'],
    },
    2:{
      'time': 'Dec 2021 - Present',
      'title': 'Campus Ambassador',
      'org': ['Cowrywise', 'https://www.cowrywise.com'],
    }
  }
  return (
    <div className='home-cont'>

      <div className="App">
       
        <div className='home-main'>
        
         
            <h2>Hello, I'm <span className="text-contrast"> Hanif</span></h2>
         

          <div className='home-main-loop'>
              I am somewhat of <TextLoop 
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
            
              <Grid item md={6} xs={12} justifyContent="center" className='profile-image-container'>
               <Slide direction='left'>
                <div className='profile-image'><img src={Hanif} alt='A potrait of me' className='image'/></div>
                </Slide>
              </Grid>
              

              <Grid container item md={4} xs={9} justifyContent="center" className='profile-skills'>
                <Grid item xs={12}><span className='skills-head'>My Top Skills</span></Grid>
                {skills.map((skill,i) =>
                  <Grid item xs={5}  justifyContent="center" className='skill-container' key={i}>
                    <Slide direction='up' cascade >
                     <div className={'skill-name'}>{skill}</div>
                     </Slide>
                  </Grid>
                )}               
                  <Grid item xs={12}><span className='skills-footer'>...and of course HTML and CSS</span></Grid>
              </Grid>
          </Grid>

          <span className='divider-container'><img src={Divider} alt='divider' className='divider'/></span>

            {/* Me section */}
            <div className='section'>
              <Grid container justifyContent="center" alignitems='center'>
                <Grid item md={6}  xs={12} >
                  <h2 className='skills-head'>Who I am</h2>
                  {summary.map((v,i) => 
                    <div className='profile-summary' key={i}>{v}</div>
                  )}
                </Grid>

                <Grid item md={6}  xs={12}>
                <Slide direction="right">
                      <img src={Person} alt='A person SVG Icon' className='person-icon'/> 
                </Slide>
                </Grid>
              </Grid>
          </div>

          {/* Education section */}
          <div className='section'>
          <h2 className='skills-head'>Education</h2>
          <Grid container justifyContent="center" alignitems='center'>
            <Grid item container sm={6} xs={12} >
              {(Object.values(education).map((edu,i) => 
             
                <div className='card-container' key={i}>
                   
                  <Grid container >
                    <Grid item  xs={3}><div className='card-icon'><SchoolIcon color='inherit' fontSize='large'/></div></Grid>
                    <Grid item  xs={9} justifyContent="center" className='card-text'>
                      
                      <span className='card-time'>{edu.time} {(edu.ongoing) ? <span className='ongoing'>Ongoing...</span>:''}</span>
                      <span className='card-title'>{edu.title}</span>
                      <span className='card-org'><a href={edu.org[1]} target='_blank' rel="noreferrer">{edu.org[0]}</a></span>
                    
                    </Grid>
                  </Grid>
                 
                </div>
          
                ))}
          </Grid>  

            <Grid item  sm={6} xs={12}>
            <Slide direction="right">
                  <img src={Books} alt='Books SVG Icon' className='books-icon'/> 
            </Slide>
            </Grid>
          </Grid>
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
              {(Object.values(experiences).map((edu,i) => 
             
                <div className='card-container' key={i}>
                  <Grid container >
                    <Grid item  xs={3} sm={2}><div className='card-icon'><WorkIcon color='inherit' fontSize='large'/></div></Grid>
                    <Grid item  xs={9} justifyContent="center" className='card-text'>
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
