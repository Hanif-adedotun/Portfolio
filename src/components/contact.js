import {React, useState, useEffect} from 'react';
import '../styles/contact.css';

// Material UI Components
import {IconButton, Grid, Box, TextField, InputAdornment, FormControl, Button} from '@mui/material';
import {CloseOutlined} from '@mui/icons-material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

// Email
import { send } from 'emailjs-com';

function Contact({onClose}){
     useEffect(() => 
     window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
     ,[]);

     const [value, setValue] = useState({
          'name': '',
          'to_name': 'Hanif Adedotun',
          'message': '',
          'email': '',          
     });
 
     const handleChange = (e) => {
          setValue({...value, [e.target.name]: e.target.value})
     };

     const [submitText, setSubmitText] = useState('Send Message');

     const handleSubmit = (e) =>{
          e.preventDefault();
          setSubmitText('Sending...');
          console.log(value);

          send("service_er2wrqn","template_9rrsmoo", value, 'user_DKVKF7hrR4qlSNPbCl8e3').then((res) => {
               console.log('SUCCESS!', res.status, res.text);
               setSubmitText('Message Sent!');
               setTimeout(()=> setSubmitText('Send Message'),3000);
          }).catch((err) => {
               console.log('EMAIL FAILED...', err);
               setSubmitText(`Couldn't send message`);
               setTimeout(()=> setSubmitText('Send Message'),3000);
          })
     }

     return(
          <Box className={'contact-modal-box'}>

               <Grid container spacing={2} justifyContent="flex-end">
                    <Grid item xs={1}>
                         <IconButton onClick={onClose}>
                              <CloseOutlined />
                         </IconButton>
                    </Grid>  
               </Grid>

               <Grid container justifyContent="center">
                    <Grid  item  xs={6}>
                         <h2>Contact me</h2>

                         <p>Fill the form to send a quick message to me</p>

                         <Box alignItems="center" display="flex" className='contact-link-container'>
                              <PhoneIcon className="contact-icon"/> <a href='tel:+2348106280767' className='contact-link'>+234 810 628 0767</a>
                         </Box>
                         
                         <Box alignItems="center" display="flex" className='contact-link-container'>
                              <EmailIcon className="contact-icon"/> <a href='mailto:hanif.adedotun@gmail.com' className='contact-link'>hanif.adedotun@gmail.com</a>
                         </Box>

                         <Box alignItems="center" display="flex" className='contact-link-container'>
                              <LocationOnIcon className="contact-icon"/> Abuja, Nigeria
                         </Box>

                         {/* Solial Media Icons */}
                         <Grid container justifyContent="center" className='social-icon-container'>
                              <Grid item xs={3}>
                                   <a href={'https://www.linkedin.com/in/hanif-adedotun'} className='social-icon'><LinkedInIcon sx={{ fontSize: 32 }} /></a>
                              </Grid>

                              <Grid item xs={3}>
                                   <a href={'https://github.com/Hanif-adedotun'} className='social-icon'><GitHubIcon sx={{ fontSize: 32 }}/></a>
                              </Grid>

                              <Grid item xs={3}>
                                   <a href={'https://twitter.com/HanifAdedotun'} className='social-icon'><TwitterIcon sx={{ fontSize: 32 }}/></a>
                              </Grid>
                         </Grid>

                    </Grid>
                    

                    <Grid 
                    container 
                    item 
                    xs={6}
                    sx={{boxShadow:4}}
                    className="contact-form" 
                    justifyContent="center">

                      <FormControl>
                      <TextField
                         required
                         name="name"
                         value={value.name}
                         onChange={handleChange}
                         label="Full Name"
                         autoComplete='name'
                         className='form-input'
                         size='small'
                         InputProps={{
                              startAdornment: (
                              <InputAdornment position="start">
                              <AccountBoxIcon />
                              </InputAdornment>
                              ),
                         }}
                         variant="outlined"
                         />

                         <TextField
                         required
                         name="email"
                         value={value.email}
                         onChange={handleChange}
                         label="Email"
                         autoComplete='email'
                         className='form-input'
                         size='small'
                         InputProps={{
                              startAdornment: (
                              <InputAdornment position="start">
                              <EmailIcon />
                              </InputAdornment>
                              ),
                         }}
                         variant="outlined"
                         />

                         <TextField
                         name="message"
                         value={value.message}
                         onChange={handleChange}
                         label="Message"
                         placeholder="Your message"
                         className='form-input'
                         size='small'
                         multiline
                         rows={4}
                              />
                         </FormControl>

                         <Button size='small' variant="contained" className="form-send" onClick={handleSubmit}>{submitText}</Button>
                    </Grid>
               </Grid>

          </Box>
     )
}

export default Contact; 