import {React, useState} from 'react';
import '../styles/contact.css';

// Material UI Components
import {IconButton, Grid, Box, TextField, InputAdornment, FormControl, Button} from '@mui/material';
import {CloseOutlined, AccountCircle} from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';


function Contact({onClose}){
     const [value, setValue] = useState({
          'name': '',
          'email': '',
          'message': '',
     });
 
     const handleChange = (e) => {
          setValue({...value, [e.target.name]: e.target.value})
     };

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
                    <Grid  item xs={6}>
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
                         <Grid container justifyContent="center">
                              <Grid item xs={3}>
                                   <LinkedInIcon/>
                              </Grid>

                              <Grid item xs={3}>
                                   <GitHubIcon/>
                              </Grid>

                              <Grid item xs={3}>
                                   <TwitterIcon/>
                              </Grid>
                         </Grid>

                    </Grid>
                    

                    <Grid  item xs={6} className="contact-form" justifyContent="center">
                      <FormControl>
                      <TextField
                         required
                         name="name"
                         value={value.name}
                         onChange={handleChange}
                         label="Full Name"
                         autoComplete='name'
                         className='form-input'
                         InputProps={{
                              startAdornment: (
                              <InputAdornment position="start">
                              <AccountCircle />
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
                         InputProps={{
                              startAdornment: (
                              <InputAdornment position="start">
                              <AccountCircle />
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
                         multiline
                         rows={4}
                              />
                         </FormControl>

                         <Grid container xs={12} justifyContent='flex-end'>
                              <Grid item xs={8} sm={6} >
                              <Button variant="contained" className="form-send">Send Button</Button>
                              </Grid>
                         </Grid>
                    </Grid>
               </Grid>

          </Box>
     )
}

export default Contact; 