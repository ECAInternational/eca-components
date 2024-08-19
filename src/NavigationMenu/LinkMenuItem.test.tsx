import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LinkMenuItem } from './LinkMenuItem.tsx';

describe('LinkMenuItem', () => {
  it('when item matches current url, shows active styling', () => {
    const props = {
      details: {
        id: '1',
        link: '/my-link',
        label: 'My Link',
        icon: 'link-icon',
        enabled: true
      },
      isNavExpanded: true
    };

    render(
      <MemoryRouter initialEntries={['/my-link']}>
        <LinkMenuItem {...props} />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: 'My Link' })).toHaveClass('bg-controls-element-tonal');
  });

  it('when isTopLevel is true shows link with icon', () => {
    const props = {
      details: {
        id: '1',
        link: '/my-link',
        label: 'My Link',
        icon: 'link-icon',
        enabled: true
      },
      isNavExpanded: true,
      isTopLevel: true,
      isContentVisible: true
    };

    render(<LinkMenuItem {...props} />, { wrapper: MemoryRouter });

    expect(screen.getByRole('link', { name: 'My Link' })).toBeInTheDocument();
    expect(screen.getByTestId('link-icon')).toBeInTheDocument();

    expect(screen.queryByTestId('menu-branch')).not.toBeInTheDocument();
  });

  it('when isTopLevel is false shows link with branch', () => {
    const props = {
      details: {
        id: '1',
        link: '/my-link',
        label: 'My Link',
        enabled: true
      },
      isNavExpanded: true,
      isTopLevel: false
    };
    render(<LinkMenuItem {...props} />, { wrapper: MemoryRouter });

    expect(screen.getByRole('link', { name: 'My Link' })).toBeInTheDocument();
    expect(screen.getByTestId('menu-branch')).toBeInTheDocument();

    expect(screen.queryByTestId('link-icon')).not.toBeInTheDocument();
  });
});
