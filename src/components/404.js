import React from 'react';
import {Link} from 'react-router-dom';

function footer(){
     return(
          <div className='404'>
               <h1>404 Not Found</h1>
               <h3>Page does not exist, check out my projects <Link to={'/resume'}>here</Link></h3>
          </div>
     )
}

export default footer;