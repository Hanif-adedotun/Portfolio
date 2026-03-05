import React from 'react';
   import { render, fireEvent, waitFor } from '@testing-library/react';
   import { TabContext, TabList, TabPanel } from '@mui/lab';
   import { Tab } from '@mui/material';
   import Projects from './Projects';

   jest.mock('../utility/projects', () => ({
     applications: [
       { name: ['Test App', 'https://test.app'], img: 'https://test.app/img', summary: 'Test app summary', tools: { tool1: 'Tool 1', tool2: 'Tool 2' } },
     ],
     graphics: [
       ['Test Graphic', 'https://test.graphic/img'],
     ],
     websites: [
       { name: ['Test Website', 'https://test.website'], img: 'https://test.website/img', summary: 'Test website summary', tools: { tool1: 'Tool 1', tool2: 'Tool 2' } },
     ],
   }));

   describe('Projects component', () => {
     it('renders correctly', () => {
       const { getByText } = render(<Projects />);
       expect(getByText('A view of my projects')).toBeInTheDocument();
     });

     it('renders tabs correctly', () => {
       const { getAllByRole } = render(<Projects />);
       const tabs = getAllByRole('tab');
       expect(tabs.length).toBe(4);
     });

     it('changes tab on click', async () => {
       const { getAllByRole, getByText } = render(<Projects />);
       const tabs = getAllByRole('tab');
       fireEvent.click(tabs[1]);
       await waitFor(() => expect(getByText('App development')).toBeInTheDocument());
     });
   });