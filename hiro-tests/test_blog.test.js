import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Blog from './Blog';

describe('Blog component', () => {
  it('should render and redirect to medium', async () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Blog />
      </Router>
    );

    expect(getByText('Redirecting to Medium....')).toBeInTheDocument();

    await waitFor(() => expect(window.location.href).toBe('https://medium.com/@devhanif'));
  });

  it('should update document title', () => {
    const { getByText } = render(
      <Router history={createMemoryHistory()}>
        <Blog />
      </Router>
    );

    expect(document.title).toBe('Blog | Redirecting to Medium...');
  });

  it('should render footer component', () => {
    const { getByText } = render(
      <Router history={createMemoryHistory()}>
        <Blog />
      </Router>
    );

    expect(getByText('Footer')).toBeInTheDocument();
  });
});