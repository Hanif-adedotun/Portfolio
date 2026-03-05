import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import four from './four';

describe('four component', () => {
  it('should render 404 page', () => {
    const { getByText } = render(<BrowserRouter><four /></BrowserRouter>);
    expect(getByText('404 - Not Found')).toBeInTheDocument();
  });

  it('should render link to projects page', () => {
    const { getByText } = render(<BrowserRouter><four /></BrowserRouter>);
    expect(getByText('here')).toBeInTheDocument();
  });

  it('should render link with correct href', () => {
    const { getByText } = render(<BrowserRouter><four /></BrowserRouter>);
    const link = getByText('here');
    expect(link.href).toContain('/projects');
  });
});