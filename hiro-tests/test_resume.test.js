
   import React from 'react';
   import { render, fireEvent, waitFor } from '@testing-library/react';
   import { MyResume } from './MyResume';

   describe('MyResume', () => {
      it('renders resume with loader', async () => {
         const { getByClassName } = render(<MyResume />);
         expect(getByClassName('resume-load-cont')).toBeInTheDocument();
      });

      it('renders PDF on load', async () => {
         const resumeOnLoad = jest.fn();
         const { getByClassName } = render(
            <MyResume resumeOnLoad={resumeOnLoad} />
         );
         await waitFor(() => getByClassName('resume-pdf'));
         expect(getByClassName('resume-pdf')).toBeInTheDocument();
      });

      it('handles pagination', async () => {
         const { getByClassName } = render(<MyResume />);
         const nextButton = getByClassName('resume-next');
         const backButton = getByClassName('resume-back');
         fireEvent.click(nextButton);
         await waitFor(() => getByClassName('resume-pdf'));
         expect(getByClassName('resume-pdf')).toBeInTheDocument();
         fireEvent.click(backButton);
         await waitFor(() => getByClassName('resume-pdf'));
         expect(getByClassName('resume-pdf')).toBeInTheDocument();
      });
   });
   