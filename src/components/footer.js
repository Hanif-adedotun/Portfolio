import React from 'react';
import '../styles/footer.css';

function footer(){
     let d = new Date();
     return(
          <div className='footer'>
               <span className='footer-text'>&copy; Copyright {d.getFullYear()} Hanif Adedotun. All rights reserved. Made with Passion. <span>V2.2.1</span></span>
          </div>
     )
}

export default footer;