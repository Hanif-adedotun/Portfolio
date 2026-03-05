
   import React from 'react';
   import { render, fireEvent, waitFor } from '@testing-library/react';
   import { Contact } from './Contact';

   jest.mock('emailjs-com');

   describe('Contact Component', () => {
       it('renders contact form and social media links', () => {
           const onClose = jest.fn();
           const { getByText, getByRole } = render(<Contact onClose={onClose} />);
           expect(getByText('Contact me')).toBeInTheDocument();
           expect(getByText('Send a message')).toBeInTheDocument();
           expect(getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
           expect(getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
           expect(getByRole('link', { name: 'Twitter' })).toBeInTheDocument();
       });

       it('submits the contact form and sends an email', async () => {
           const onClose = jest.fn();
           const { getByLabelText, getByRole } = render(<Contact onClose={onClose} />);
           const nameInput = getByLabelText('Full Name');
           const emailInput = getByLabelText('Email');
           const messageInput = getByLabelText('Message');
           const submitButton = getByRole('button', { name: 'Send Message' });

           fireEvent.change(nameInput, { target: { value: 'John Doe' } });
           fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
           fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });

           fireEvent.click(submitButton);

           await waitFor(() => expect(emailjs.send).toHaveBeenCalledTimes(1));
       });

       it('displays an error message when email sending fails', async () => {
           const onClose = jest.fn();
           const { getByLabelText, getByRole, getByText } = render(<Contact onClose={onClose} />);
           const nameInput = getByLabelText('Full Name');
           const emailInput = getByLabelText('Email');
           const messageInput = getByLabelText('Message');
           const submitButton = getByRole('button', { name: 'Send Message' });

           fireEvent.change(nameInput, { target: { value: 'John Doe' } });
           fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
           fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });

           fireEvent.click(submitButton);

           emailjs.send.mockRejectedValue(new Error('Email sending failed'));

           await waitFor(() => expect(getByText('Couldn't send message')).toBeInTheDocument());
       });
   });
   