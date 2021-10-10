import React from 'react';
import '../styles/certificates.css';

// Material UI
import {Grid} from '@mui/material';

// Footer
import Footer from './footer';
// Certificates
import Excel2013 from '../images/certificates/excel2013.jpg';
import PP2016 from '../images/certificates/powerpoint2016.jpg';
import AIUdemy from '../images/certificates/ai-udemy.png';
import DataUdemy from '../images/certificates/dataUdemy.PNG';

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
          'name':'AWS Concepts',
          'org': 'Udemy',
          'img': false,
          'year': '2021',
          'link': 'https://www.udemy.com/share/101r3GAEMZdVhbTH8C/'
     },
     5:{
          'name':'Intrduction to Data Science using Python',
          'org': 'Udemy',
          'img': DataUdemy,
          'year': '2021',
          'link': 'https://www.udemy.com/share/101rPyAEMZdVhbTH8C/'
     },
     6:{
          'name':'Lego Robotics Championship',
          'org': 'LEGO',
          'img': false,
          'year': '2019',
          'physical': true,
          'link': '',
     }
}

function Certifications(){
     return(
          <div className='certificates-main'>
               <span className='certificates-head'>These are my Certificates</span>

               <Grid container xs={12} justifyContent="center" spacing={5}>
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