import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Contact } from './Contact';
import { vi } from 'vitest';

describe('Contact', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders form fields and labels', () => {
    render(<Contact />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send|Sending/ })).toBeInTheDocument();
  });

  it('submits successfully and shows success alert', async () => {
    const fetchMock = vi.spyOn(global, 'fetch' as any).mockResolvedValue({ ok: true });
    render(<Contact />);
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello' } });
    fireEvent.submit(screen.getByRole('button', { name: /Send|Sending/ }));
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalled();
      expect(screen.getByText(/Message sent successfully/i)).toBeInTheDocument();
    });
  });

  it('handles submission error and shows error alert', async () => {
    vi.spyOn(global, 'fetch' as any).mockResolvedValue({ ok: false });
    render(<Contact />);
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello' } });
    fireEvent.submit(screen.getByRole('button', { name: /Send|Sending/ }));
    await waitFor(() => {
      expect(screen.getByText(/Failed to send message/i)).toBeInTheDocument();
    });
  });
});
