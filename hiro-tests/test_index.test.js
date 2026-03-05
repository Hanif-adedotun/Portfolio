import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { render, unmountComponentAtNode } from '@testing-library/react';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, div);
    expect(div.innerHTML).toContain('Hanif | Full Stack Developer');
    unmountComponentAtNode(div);
  });

  it('renders app component', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hanif | Full Stack Developer')).toBeInTheDocument();
  });

  it('renders StrictMode', () => {
    const { getByText } = render(<React.StrictMode><App /></React.StrictMode>);
    expect(getByText('Hanif | Full Stack Developer')).toBeInTheDocument();
  });
});