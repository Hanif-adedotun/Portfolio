import React from 'react';
import '../styles/certificates.css';

// Material UI
import {Grid} from '@mui/material';

// Footer
import Footer from '../components/footer';

const certificates = {
     1:{
          'name':'Microsoft Office Specialist: Microsoft Office Excel 2013',
          'org': 'Microsoft',
          'img': false,
          'year': '2019',
          'link': 'https://portal.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=192&cvid=XRSAFO7FalspSbH6Om0qqA=='
     },
     2:{
          'name':'Microsoft Office Specialist: Microsoft Office Excel 2013',
          'org': 'Microsoft',
          'img': false,
          'year': '2018',
          'link': 'https://portal.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=252&cvid=iqjugrOUSZAauzZFR7BYSQ=='
     },
     3:{
          'name':'Artificial Intelligence Intro',
          'org': 'IBM',
          'img': false,
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
          'img': false,
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
               <span className='certificates-head'>This is my Certificates</span>

               <Grid container xs={12} justifyContent="center" spacing={5}>
                   {Object.values(certificates).map((v,i) => 
                    <Grid item xs={6} key={i} className='certificates-container' >
                         <div className='certificates-img-container'>Image of certificate</div>
                         <div className='certificates-title'>Cerificate of Hustle</div>
                         <div className='certificates-org'>Street limited <span>2018</span></div>
                    </Grid>
                   )}
               </Grid>
               {/* Footer */}
               <span id='footer-cert'><Footer/></span>
          </div>
     )
}

export default Certifications;