import React from 'react';
import Home_bg from '../images/home_bg.svg';
import '../styles/home.css';

// Scrolling text
import { TextLoop } from "react-text-loop-next";


function App() {
  return (
    <div className="App">
      <img src={Home_bg} alt='' className='bg'/>
     
     <div className='home-main'>
     
        <h2>Hello, I'm <span className="text-contrast"> Hanif</span></h2>


      <div className='home-main-loop'>
          I am somewhere between <TextLoop interval={3000} className='home-text-loop'>
        <span>a Full Stack Developer</span>
        <span>a Graphics Designer</span>
        <span>an Engineering Student</span>
        <span>a Machine Learning enthusiast</span>
        <span>a Blockchain advocate</span>
        </TextLoop>{" "}

      </div>

        </div> 

      
      <div className='skills-section'>
        
        <div className='skills-eulogy'>I’ll probably be the smallest person  in a room in terms of size, 
          but trust me not in knowledge...
        </div>

      </div>
    </div>
  );
}

export default App;
