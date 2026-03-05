
   import React from 'react';
   import { render, fireEvent, waitFor } from '@testing-library/react';
   import { Navigation } from './Navigation';
   import { HashRouter } from 'react-router-dom';
   import { ThemeProvider } from '@mui/material/styles';
   import { createTheme } from '@mui/material';

   const theme = createTheme();

   describe('Navigation', () => {
     it('renders correctly', () => {
       const { getByText } = render(
         <ThemeProvider theme={theme}>
           <HashRouter>
             <Navigation />
           </HashRouter>
         </ThemeProvider>
       );
       expect(getByText('Hanif Adedotun')).toBeInTheDocument();
     });

     it('opens and closes drawer on mobile', () => {
       const { getByRole, getByText } = render(
         <ThemeProvider theme={theme}>
           <HashRouter>
             <Navigation />
           </HashRouter>
         </ThemeProvider>
       );
       const drawerButton = getByRole('button');
       fireEvent.click(drawerButton);
       expect(getByText('Home')).toBeInTheDocument();
       fireEvent.click(getByText('Home'));
       expect(getByText('Home')).not.toBeVisible();
     });

     it('opens and closes contact modal', () => {
       const { getByRole, getByText } = render(
         <ThemeProvider theme={theme}>
           <HashRouter>
             <Navigation />
           </HashRouter>
         </ThemeProvider>
       );
       const contactButton = getByRole('button', { name: 'Contact me' });
       fireEvent.click(contactButton);
       expect(getByText('Contact me')).toBeInTheDocument();
       const closeButton = getByRole('button', { name: 'Close' });
       fireEvent.click(closeButton);
       expect(getByText('Contact me')).not.toBeVisible();
     });
   });
   