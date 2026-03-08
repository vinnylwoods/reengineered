import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders brand text', () => {
    render(<Logo />);
    expect(screen.getByText('(re)')).toBeInTheDocument();
    expect(screen.getByText('ngineered')).toBeInTheDocument();
  });

  it('applies default accent color', () => {
    render(<Logo />);
    const re = screen.getByText('(re)');
    expect(re.className).toMatch(/text-green-500/);
  });

  it('applies custom accent color and merges classes', () => {
    render(<Logo accentColor="text-blue-500" className="test-class" />);
    const re = screen.getByText('(re)');
    const container = re.parentElement as HTMLElement;
    expect(re.className).toMatch(/text-blue-500/);
    expect(container.className).toMatch(/test-class/);
  });
});
