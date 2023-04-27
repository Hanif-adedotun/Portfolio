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

  const HanifImages = [
    '/hanif.jpg',
    '/hanif.png',
    '/hanif2.jpg'
  ]
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  const summary =[
    'Hello there! My name is Hanif, and I have a passion for technology and using it to solve problems.', 

    'Over the years, I have explored various aspects of tech - from designing graphics to creating websites using HTML and CSS. I have been delving into the exciting world of machine learning and A.I. I am passionate about the role that these emerging technologies play in shaping our future, and how they can be used to accelerate growth in our nation and beyond.',
    
    'Currently, I am building a startup that solves the problem of a lack of information about internship opportunities while providing interns with the tools they need to excel.',
    
    'My tech stack includes React, NodeJS, NextJs, PHP, Python, Java, MongoDB, Typescript, Corel Draw, Figma, and many more. I am always on the lookout for new challenges and opportunities to grow my skills and knowledge.',
    
    'Let us connect and explore the possibilities together'
  ]
  const skills = ['Javascript', 'React', 'NextJs', 'PHP', 'C++', 'Nodejs','MySql', 'MongoDB', 'Figma', 'Python', 'Machine Learning'];

  const education = [
    {
      'ongoing': true,
      'time': '2019-2024',
      'title': 'BSc. Computer Engineering',
      'org': ['Nile university of Nigeria', 'https://www.nileuniversity.edu.ng/'],
    },
    {
      'ongoing': false,
      'time': '2016-2019',
      'title': 'Secondary School certificate',
      'org': ['Glisten International Academy', 'https://glisteninternationalacademy.com/secondary-school/'],
    },

  ]
  const experiences = [
    {
      'time': 'Sept 2022 - Present',
      'title': 'Co-founder',
      'org': ['Ntrna technologies', 'https://getinterna.com/'],
      'desc': `Our flagship product Interna, is a solution designed to provide internship opportunities to every student, equip them with professional tools and provide a community of students who have undergone internships and students who are looking for internships.`
    },
    {
      'time': 'Aug 2022 - Present',
      'title': 'Community Lead',
      'org': ['GDSC Nile University', 'https://gdsc.community.dev/nile-university-of-nigeria/'],
      'desc': `I have taken on the responsibility to help students grow as developers and empower these students to impact their communities with technology. Through this experience I hope to be leaving a legacy of impact but also growing as an individual and contributing in a meaningful way to the greater developer ecosystem`
    },
    {
      'time': 'June 2022 - Present',
      'title': 'Backend Software Engineer',
      'org': ['Devtranet', 'https://devtranet.tech/'],
      'desc': `Devtranet is a global network for developers and technologists to connect, build, and discover opportunities.`,   
    },
    {
      'time': 'January 2021 - August 2022',
      'title': 'AI & ML Lead',
      'org': ['Google Developer Student Club - Nile University Chapter', 'https://www.nileuniversity.edu.ng/'],
      'desc': `I was appointed as the development lead in the Artificial Intelligence team. This was a platform for me to create awareness of the impact of AI in our lives and how to help students build solutions using the technology`
    },
    {
      'time': 'Mar 2021 - Sep 2021',
      'title': 'Full stack web developer - Internship',
      'org': ['Utility ware', 'https://www.linkedin.com/company/utility-ware/'],
      'desc': `I was a full stack web developer intern at Utility ware, a company that provides services to the public. I was responsible for developing the frontend and backend of the company's website.`
    }
  ]
  return (
    <div className='home-cont'>

      <div className="App">
       
        <div className='home-main'>
        
         
            <h2>Hello, I'm <span className="text-contrast"> Hanif</span></h2>
         

          <div className='home-main-loop'>
              <TextLoop 
              interval={2500} 
              adjustingSpeed={500} 
              springConfig={{ stiffness: 120, damping: 20 }}
              className='home-text-loop'
              children={[
                "Full Stack Developer",
                "Visionary",
                "Graphics Designer",
                "Engineering Student",
                "Machine Learning enthusiast",
                "Web3 believer"
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
               <div className='profile-image-card1'>
                  <div className='profile-image-card2'>
                    <div className='profile-image'>
                      <img src={HanifImages[getRndInteger(0, HanifImages.length)]} alt='A potrait of me' className='image'/>
                      {/* <img src={HanifImages[getRndInteger(0, HanifImages.length)]} alt='A potrait of me' className='image'/> */}
                    </div>
                  </div>
                </div>
                </Slide>
              </Grid>
              

              <Grid container item md={4} xs={9} justifyContent="center" className='profile-skills'>
                <Grid item xs={12}><span className='skills-head'>My Top Skills</span></Grid>
                {skills.map((skill,i) =>
                  <Grid item xs={5}  justifyContent="center" className='skill-container' key={i}>
                    <Slide direction='up' cascade >
                     <div className={`skill-name ${(i%2===0) ? 'skill-name-alt': ''}`}>{skill}</div>
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
                      <div className='img-cover-1'>
                        <img src={Person} alt='A person SVG Icon' className='person-icon'/> 
                      </div>
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
