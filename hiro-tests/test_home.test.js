
      import React from 'react';
      import { render, fireEvent, waitFor } from '@testing-library/react';
      import App from './App';
      import { MemoryRouter } from 'react-router-dom';

      describe('App component', () => {
         it('renders correctly', () => {
            const { getByText } = render(
               <MemoryRouter>
                  <App />
               </MemoryRouter>
            );
            expect(getByText('Hey, I am Hanif Adedotun')).toBeInTheDocument();
         });

         it('renders technologies section', () => {
            const { getByText } = render(
               <MemoryRouter>
                  <App />
               </MemoryRouter>
            );
            expect(getByText('Technologies I work with')).toBeInTheDocument();
         });

         it('renders education section', () => {
            const { getByText } = render(
               <MemoryRouter>
                  <App />
               </MemoryRouter>
            );
            expect(getByText('Education')).toBeInTheDocument();
         });
      });
   