import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { userEvent } from '@testing-library/user-event';

import { NavigationMenu } from './NavigationMenu';
import type { MenuItemDetails } from './types';

describe('NavigationMenu', () => {
  const menuItems: MenuItemDetails[] = [
    { id: '1', label: 'Item 1', subItems: [{ id: '1.1', label: 'Item 1.1', link: '/1.1', enabled: true }], enabled: false },
    { id: '2', label: 'Item 2', subItems: [{ id: '2.1', label: 'Item 2.1', link: 'https://localhost/2.1', enabled: true }], enabled: false }
  ];

  const mockUrl = 'http://example.com/test';

  it('renders NavHeader, NavFooter, and the menu items', () => {
    render(<NavigationMenu menuItems={menuItems} url={mockUrl} />);

    expect(screen.getByRole('heading', { name: 'Your Company' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Collapse' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Item 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Item 2' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Item 2.1' })).not.toBeInTheDocument();
  });

  it('handles navigation expansion and collapse', async () => {
    const user = userEvent.setup({});
    render(<NavigationMenu menuItems={menuItems} url={mockUrl} />);

    await act(async () => {
      await user.click(screen.getByRole('button', { name: /Collapse/i }));
    });

    await act(async () => {
      await user.click(screen.getByRole('button', { name: /Expand/i }));
    });

    expect(await screen.findByRole('button', { name: /Collapse/i })).toBeInTheDocument();
  });

  it('collapses other menu items when one is expanded', async () => {
    const user = userEvent.setup({});
    render(<NavigationMenu menuItems={menuItems} url={mockUrl} />);

    await act(async () => {
      await user.click(screen.getByRole('button', { name: /Item 1/i }));
    });

    expect(await screen.findByRole('link', { name: /Item 1.1/i })).toBeInTheDocument();

    await act(async () => {
      await user.click(screen.getByRole('button', { name: /Item 2/i }));
    });

    expect(await screen.findByRole('link', { name: /Item 2.1/i })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Item 1.1/i })).not.toBeInTheDocument();
  });

  it('highlights correct options for relative links', async () => {
    const user = userEvent.setup({});
    render(<NavigationMenu menuItems={menuItems} url={'https://localhost/1.1'} />);

    expect(await screen.findByRole('button', { name: /Item 1/i })).toHaveClass('bg-controls-element-tonal');

    await act(async () => {
      await user.click(screen.getByRole('button', { name: /Item 1/i }));
    });

    expect(await screen.findByRole('link', { name: /Item 1.1/i })).toHaveClass('bg-controls-element-tonal');
  });

  it('highlights correct options for absolute links', async () => {
    const user = userEvent.setup({});
    render(<NavigationMenu menuItems={menuItems} url={'https://localhost/2.1'} />);

    expect(await screen.findByRole('button', { name: /Item 2/i })).toHaveClass('bg-controls-element-tonal');

    await act(async () => {
      await user.click(screen.getByRole('button', { name: /Item 2/i }));
    });

    expect(await screen.findByRole('link', { name: /Item 2.1/i })).toHaveClass('bg-controls-element-tonal');
  });
});
