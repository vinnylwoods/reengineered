import { render, screen } from '@testing-library/react';
import { Recommendations } from './Recommendations';

describe('Recommendations', () => {
  it('renders heading and testimonials', () => {
    render(<Recommendations />);
    expect(screen.getByText('/ TESTIMONIALS')).toBeInTheDocument();
    expect(screen.getByText('Trusted by clients worldwide')).toBeInTheDocument();
    // Check at least two known authors exist
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
    expect(screen.getByText('Michael Chen')).toBeInTheDocument();
  });
});
