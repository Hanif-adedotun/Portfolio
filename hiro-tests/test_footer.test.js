import React from 'react';
import { render } from '@testing-library/react';
import footer from './footer';

describe('Footer component', () => {
  it('renders the current year in the footer', () => {
    const { getByText } = render(<footer />);
    const currentYear = new Date().getFullYear();
    expect(getByText(`Copyright ${currentYear} Hanif Adedotun. All rights reserved. Made with Passion. V2.2.1`)).toBeInTheDocument();
  });

  it('renders the footer text with the correct class name', () => {
    const { getByClassName } = render(<footer />);
    expect(getByClassName('footer-text')).toBeInTheDocument();
  });

  it('renders the footer with the correct class name', () => {
    const { getByClassName } = render(<footer />);
    expect(getByClassName('footer')).toBeInTheDocument();
  });
});