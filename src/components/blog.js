import React, {useEffect} from 'react';
import Footer from './footer';
import '../styles/blog.css';

export default function Blog() {
     useEffect(() => {
          window.scrollTo({
               top: 0,
               behavior: "smooth"
             });
             document.title = "Blog | Coming soon...";
          }
          ,[]);

     return(
          <div>
               <div className='blog-coming-soon'>Coming soon....</div>

               <span id='footer-cert'><Footer/></span>
          </div>
     )
}