import React, {useEffect} from 'react';
import Footer from './footer';
import '../styles/blog.css';

export default function Blog() {
     useEffect(() => {
          window.scrollTo({
               top: 0,
               behavior: "smooth"
             });
             document.title = "Blog | Redirecting to Medium...";
          },
          setTimeout(() => {
               window.location.href = "https://medium.com/@devhanif";
          },2000)
          ,[]);

     

     return(
          <div>
               <div className='blog-coming-soon'>Redirecting to Medium....</div>

               <span id='footer-cert'><Footer/></span>
          </div>
     )
}