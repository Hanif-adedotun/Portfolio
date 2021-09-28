import React from 'react';
import Home_bg from '../images/home_bg.svg';
import '../styles/home.css';



function App() {
  return (
    <div className="App">
      <img src={Home_bg} alt='' className='bg'/>
     
     <div className='home-main'>
     Hanif Adedotun      
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
