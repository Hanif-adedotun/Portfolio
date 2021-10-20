import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/404.css';

function four(){
     return(
          <div className='main-four'>
               <div className='cont-four'>
               <h1><span className='contrast-four'>404</span> - Not Found</h1>
               <h3>Page does not exist, check out my projects <Link to={'/projects'} className='four-link'>here</Link></h3>
               </div> 
          </div>
     )
}

export default four;