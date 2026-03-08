import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import { vi } from 'vitest';
import { act } from 'react-dom/test-utils';

describe('Hero', () => {
  it('renders terminal header and command', () => {
    render(<Hero />);
    expect(screen.getByText(/bash/)).toBeInTheDocument();
    expect(screen.getByText('./init_sequence.sh --optimize')).toBeInTheDocument();
  });

  it('toggles replay class on interval', () => {
    vi.useFakeTimers();
    render(<Hero />);
    const header = screen.getByText(/bash/);
    const container = header.closest('.group') as HTMLElement;
    expect(container.className).not.toMatch(/replay/);
    act(() => {
      vi.advanceTimersByTime(10000);
    });
    expect(container.className).toMatch(/replay/);
    act(() => {
      vi.advanceTimersByTime(10000);
    });
    expect(container.className).not.toMatch(/replay/);
    vi.useRealTimers();
  });
});
