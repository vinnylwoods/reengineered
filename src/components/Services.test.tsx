import { render, screen } from '@testing-library/react';
import { Services } from './Services';

describe('Services', () => {
  it('renders all service cards with titles and features', () => {
    render(<Services />);
    // Titles from translations
    expect(screen.getByText('Advisory & Mentoring')).toBeInTheDocument();
    expect(screen.getByText('Design & delivery of Workshops')).toBeInTheDocument();
    expect(screen.getByText('Technology Strategy')).toBeInTheDocument();
    expect(screen.getByText('Operational Excellence')).toBeInTheDocument();
    expect(screen.getByText('Maturity Assessment')).toBeInTheDocument();
    expect(screen.getByText('Team scaling and growth')).toBeInTheDocument();

    // At least one feature item shows check and text
    const features = screen.getAllByText(/Business goals and alignmment|Delivery Productivity|Engineering Excellence|Attracting the best talent/i);
    expect(features.length).toBeGreaterThan(0);
  });
});
