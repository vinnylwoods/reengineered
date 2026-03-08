import { render, screen } from '@testing-library/react';
import { About } from './About';

describe('About', () => {
  it('renders section headings and descriptors', () => {
    render(<About />);
    expect(screen.getByText('/ ABOUT_ME')).toBeInTheDocument();
    expect(screen.getByText('Bringing together Engineering, Data, and AI')).toBeInTheDocument();
    expect(screen.getByText('Strategic leadership')).toBeInTheDocument();
    expect(screen.getByText('Expert advisor')).toBeInTheDocument();
    expect(screen.getByText('Trusted technology partner')).toBeInTheDocument();
  });
});
