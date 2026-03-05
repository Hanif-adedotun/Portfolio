
   import React from 'react';
   import { render, fireEvent, waitFor } from '@testing-library/react';
   import { Certifications } from './Certifications';
   import { Grid } from '@mui/material';

   jest.mock('react-router-dom', () => ({
     ...jest.requireActual('react-router-dom'),
     useLocation: () => ({ pathname: '/certificates' }),
   }));

   describe('Certifications', () => {
     it('renders correctly', () => {
       const { container } = render(<Certifications />);
       expect(container).toMatchSnapshot();
     });

     it('scrolls to top on mount', () => {
       const scrollToSpy = jest.fn();
       global.window.scrollTo = scrollToSpy;
       render(<Certifications />);
       expect(scrollToSpy).toHaveBeenCalledTimes(1);
     });

     it('displays all certificates', () => {
       const { getByText } = render(<Certifications />);
       const certificates = [
         'Core team member',
         'Kaggle: Intro to Machine Learning',
         'Microsoft Office Specialist: Microsoft Office Excel 2013',
         'Microsoft Office Specialist: Microsoft Office PowerPoint 2016',
         'Artificial Intelligence Intro',
         'Google Solution Challange 2021',
         'Teamwork and Team Building',
         'Business Foundation',
       ];
       certificates.forEach((certificate) => {
         expect(getByText(certificate)).toBeInTheDocument();
       });
     });
   });
   