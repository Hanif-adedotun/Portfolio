import React from 'react';

import '@fontsource/quicksand/300.css';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/700.css';

// Navigation
import Nav from './nav/nav';

// This serves as the intermediary between 
// the application and general default styles rendered throughout the application
const app = () =>{
     return(
          <div>
               <Nav/>
          </div>
     )
}

export default app;