import {React, useEffect} from 'react';
import '../styles/certificates.css';

// Material UI
import {Grid} from '@mui/material';

// Footer
import Footer from './footer';

// Certificates
import Excel2013 from '../images/certificates/excel2013.jpg';
import PP2016 from '../images/certificates/powerpoint2016.jpg';
import AIUdemy from '../images/certificates/ai-udemy.png';
import Solution from '../images/certificates/solution.jpg';
import TTB from '../images/certificates/TTB.jpg';
import BusF from '../images/certificates/BF.jpg';

const certificates = {
     1:{
          'name':'Microsoft Office Specialist: Microsoft Office Excel 2013',
          'org': 'Microsoft',
          'img': Excel2013,
          'year': '2019',
          'link': 'https://portal.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=192&cvid=XRSAFO7FalspSbH6Om0qqA=='
     },
     2:{
          'name':'Microsoft Office Specialist: Microsoft Office PowerPoint 2016',
          'org': 'Microsoft',
          'img': PP2016,
          'year': '2018',
          'link': 'https://portal.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=252&cvid=iqjugrOUSZAauzZFR7BYSQ=='
     },
     3:{
          'name':'Artificial Intelligence Intro',
          'org': 'IBM',
          'img': AIUdemy,
          'year': '2021',
          'link': 'https://www.credly.com/badges/a964634c-5205-4059-929b-333668281ed1/public_url'
     },
     4:{
          'name':'Google Solution Challange 2021',
          'org': 'Google Developer student challange',
          'img': Solution,
          'year': '2021',
          'link': 'https://drive.google.com/file/d/1nx-qA9ZnbyR15-qayYo9RktJJxw0zjoP/view?usp=sharing'
     },
     5:{
          'name': 'Teamwork and Team Building',
          'org': 'Nigeria Association of Computing Students (NACOS)',
          'img': TTB,
          'year': '2021',
          'link': 'https://drive.google.com/file/d/1LVdvIoBq9vt7I9GC120NqRm-ux2TUuZl/view?usp=sharing'
     },
     6:{
          'name': 'Business Foundation',
          'org': 'Nigeria Association of Computing Students (NACOS)',
          'img': BusF,
          'year': '2021',
          'link': 'https://drive.google.com/file/d/1wBJIRBX1Yovimp9E2OtyvB4ncUsqt0dU/view?usp=sharing'
     },
     // 7:{
     //      'name':'Lego Robotics Championship',
     //      'org': 'LEGO',
     //      'img': false,
     //      'year': '2019',
     //      'physical': true,
     //      'link': '',
     // }
}

function Certifications(){
     useEffect(() => 
     window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
     ,[]);
     return(
          <div className='certificates-main'>
               <span className='certificates-head'>These are my Certificates</span>

               <Grid container xs={12} justifyContent="center" >
                   {Object.values(certificates).map((v,i) => 
                    <Grid item xs={12} sm={6} key={i} className='certificates-container' >
                         <div className='certificates-img-container'>
                             {(v.img) ? <img className='cert-img' src={v.img} alt='Certificate snapshot'></img> : 'Image of certificate'}
                         </div>
                         <div className='certificates-title'><a href={v.link} target='_blank' rel="noreferrer">{v.name}</a></div>
                         <div className='certificates-org'>{v.org}</div>
                         <div  className='certificates-year'>{v.year}</div>
                    </Grid>
                   )}
               </Grid>
               {/* Footer */}
               <span id='footer-cert'><Footer/></span>
          </div>
     )
}

export default Certifications;