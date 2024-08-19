import { render, screen, fireEvent } from '@testing-library/react';
import { NavFooter } from './nav-footer';

describe('NavFooter', () => {
  it('should display CollapseIcon and title "Collapse" when isNavExpanded is true', () => {
    render(<NavFooter isNavExpanded={true} toggleNavExpanded={() => {}} />);

    expect(screen.getByTitle('Collapse')).toBeVisible();
    expect(screen.getByTestId('collapse-icon')).toBeVisible();
    expect(screen.queryByTestId('expand-icon')).not.toBeInTheDocument();
  });

  it('should display ExpandIcon and title "Expand" when isNavExpanded is false', () => {
    render(<NavFooter isNavExpanded={false} toggleNavExpanded={() => {}} />);

    expect(screen.getByTitle('Expand')).toBeVisible();
    expect(screen.getByTestId('expand-icon')).toBeVisible();
    expect(screen.queryByTestId('collapse-icon')).not.toBeInTheDocument();
  });

  it('should call toggleNavExpanded when button is clicked', () => {
    const toggleNavExpanded = vi.fn();
    render(<NavFooter isNavExpanded={true} toggleNavExpanded={toggleNavExpanded} />);
    fireEvent.click(screen.getByRole('button'));

    expect(toggleNavExpanded).toHaveBeenCalled();
  });

  it('should display PlatformIcon when Expanded and text', () => {
    render(<NavFooter isNavExpanded={true} toggleNavExpanded={() => {}} />);

    expect(screen.getByTestId('platform-icon')).toBeVisible();
    expect(screen.queryByText('Platform')).toBeVisible();
  });

  it('should display PlatformIcon when collapsed and no text', () => {
    render(<NavFooter isNavExpanded={false} toggleNavExpanded={() => {}} />);

    expect(screen.getByTestId('platform-icon')).toBeVisible();
    expect(screen.queryByText('Platform')).not.toBeInTheDocument();
  });
});
