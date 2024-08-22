import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ExpandableMenuItem, getIsUrlMatch } from './ExpandableMenuItem.tsx';
import { MenuItemDetails } from './types.ts';

describe('getIsUrlMatch', () => {
  it('returns true when urls match exactly', () => {
    const result = getIsUrlMatch('url', [
      {
        link: 'url',
        id: '',
        label: '',
        enabled: false
      }
    ]);
    expect(result).toBe(true);
  });

  it('returns false when urls do not match', () => {
    const result = getIsUrlMatch('url', [
      {
        link: 'url1',
        id: '',
        label: '',
        enabled: false
      }
    ]);
    expect(result).toBe(false);
  });

  it('returns true when relative url matches current url', () => {
    const result = getIsUrlMatch('http://localhost:3010/url', [
      {
        link: '/url',
        id: '',
        label: '',
        enabled: false
      }
    ]);
    expect(result).toBe(true);
  });

  it('returns true when multipart relative url matches current url', () => {
    const result = getIsUrlMatch('http://www.test.com/url/edit', [
      {
        link: '/url/edit',
        id: '',
        label: '',
        enabled: false
      }
    ]);
    expect(result).toBe(true);
  });
});

describe('ExpandableMenuItem', () => {
  const mockOnClick = vi.fn();
  const mockOnNavigate = vi.fn();

  const details: MenuItemDetails = {
    id: 'menu1',
    label: 'Menu Item 1',
    enabled: true,
    subItems: [
      { id: 'sub1', label: 'Sub Item 1', link: '/subitem1', enabled: true },
      { id: 'sub2', label: 'Sub Item 2', link: '/subitem2', enabled: true }
    ]
  };

  const defaultProps = {
    url: '/subitem1',
    details,
    onClick: mockOnClick,
    isListExpanded: true,
    isNavExpanded: true,
    isContentVisible: true,
    onNavigate: mockOnNavigate
  };

  it('renders the menu item label correctly', () => {
    render(<ExpandableMenuItem {...defaultProps} />);
    expect(screen.getByRole('button', { name: details.label })).toBeInTheDocument();
  });

  it('applies the selected class if the url exactly matches a relative subitem link', () => {
    render(<ExpandableMenuItem {...defaultProps} />);
    const button = screen.getByRole('button', { name: details.label });
    expect(button).toHaveClass('bg-controls-element-tonal');
  });

  it('applies the selected class if the url partially matches an absolute subitem link', () => {
    const props = {
      ...defaultProps,
      url: 'http://example.com/subitem1'
    };
    render(<ExpandableMenuItem {...props} />);
    const button = screen.getByRole('button', { name: details.label });
    expect(button).toHaveClass('bg-controls-element-tonal');
  });

  it('calls onClick when the button is clicked', () => {
    render(<ExpandableMenuItem {...defaultProps} />);
    const button = screen.getByRole('button', { name: details.label });
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('renders subitems conditionally based on isNavExpanded or hasPersistentPopout', () => {
    const { rerender } = render(<ExpandableMenuItem {...defaultProps} isNavExpanded={false} isListExpanded />);
    expect(screen.getByRole('button', { name: details.label })).toBeInTheDocument();

    rerender(<ExpandableMenuItem {...defaultProps} isNavExpanded />);
    expect(screen.getByRole('button', { name: details.label })).toBeInTheDocument();
  });
});
