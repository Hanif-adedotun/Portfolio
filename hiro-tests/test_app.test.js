
   import React from 'react';
   import { render } from '@testing-library/react';
   import Nav from './nav/nav';
   import app from './app';

   describe('App Component', () => {
     it('renders Nav component', () => {
       const { getByTestId } = render(<app />);
       expect(getByTestId('nav')).toBeInTheDocument();
     });

     it('renders without crashing', () => {
       render(<app />);
     });

     it('matches snapshot', () => {
       const tree = render(<app />);
       expect(tree).toMatchSnapshot();
     });
   });
   