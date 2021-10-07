import React from 'react';
import '../styles/certificates.css';

// Footer
import Footer from '../components/footer';

function Certifications(){
     return(
          <div className='certificates-main'>
               This is my Certificates

               {/* Footer */}
               <span id='footer-cert'><Footer/></span>
          </div>
     )
}

export default Certifications;