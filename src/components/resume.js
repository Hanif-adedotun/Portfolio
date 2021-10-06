import {React, useState} from 'react';
import '../styles/resume.css';

// Material UI
import {Button, Grid} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// Footer
import Footer from '../components/footer';

// PDF Viewer
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../resume/resume-v1.pdf';

function MyResume(){

     const [numPages, setNumPages] = useState(null);
     const [pageNumber, setPageNumber] = useState(1);

     const resumeOnLoad = ({numPages}) =>{
          setNumPages(numPages);
          console.log('Resume Loaded successfully');
     }

     const controlPage = (forward) =>{
          if(forward){
               if(pageNumber < numPages){
                    setPageNumber(pageNumber+1);
               }
          }else{
               if(pageNumber > 1){
                    setPageNumber(pageNumber-1);
               }
          }
     }

     return(
          <div className="resume-main">
               <span className="resume-head">My resume</span>
              
               <div className="resume-container">
               
                    <Document 
                    file={resume}
                    onLoadSuccess={resumeOnLoad}
                    className='resume-pdf'
                    loading='Loading resume...'>
                    <Page pageNumber={pageNumber} />
                    <p>Page {pageNumber} of {numPages}</p>
                    <Grid container xs={12} justifyContent="center">
                         <Grid item xs={4}><NavigateBeforeIcon onClick={() => controlPage(false)}  sx={{ fontSize: 38 }}/></Grid>
                         <Grid item xs={4}><NavigateNextIcon onClick={() => controlPage(true)} sx={{ fontSize: 38 }}/></Grid>
                    </Grid>
                    </Document>
               </div>

               
               <Button variant="outlined" className='resume-dowload' endIcon={<FileDownloadIcon />}>
               <a href={resume} download='Hanif Resume.pdf' className='resume-dowload-link'>Download Resume</a>
               </Button>
               
               {/* Footer */}
               <span id='footer-resume'><Footer /></span>
          </div>
     )
}

export default MyResume;