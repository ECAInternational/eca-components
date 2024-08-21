import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MenuItemTitle } from './MenuItemTitle.tsx';

describe('MenuItemTitle', () => {
  it('when the menuItemsDetails has an icon, icon should be visible', () => {
    render(<MenuItemTitle details={{ id: 'some-id', icon: 'icon', label: 'label', enabled: true }} isNavExpanded isListExpanded />);

    expect(screen.getByTestId('icon')).toBeVisible();
  });

  it('when the menuItemsDetails does not have an icon, icon should not be visible', () => {
    render(<MenuItemTitle details={{ id: 'some-id', label: 'label', enabled: true }} isNavExpanded isListExpanded />);

    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });

  it('when there are subItems, the ExpanderChevron should be visible and have the class for up when isListExpanded is true', () => {
    render(
      <MenuItemTitle
        details={{
          id: 'some-id',
          label: 'label',
          enabled: true,
          subItems: [{ id: 'sub-item-id', label: 'sub-item-label', enabled: true }]
        }}
        isNavExpanded
        isListExpanded
      />
    );

    expect(screen.getByTestId('chevron')).toBeVisible();
    expect(screen.getByTestId('chevron')).toHaveClass('fi-sr-angle-small-up');
  });

  it('when there are subItems, the ExpanderChevron should be visible and have the class for down when isListExpanded is false', () => {
    render(
      <MenuItemTitle
        details={{
          id: 'some-id',
          label: 'label',
          subItems: [{ id: 'sub-item-id', label: 'sub-item-label', enabled: true }],
          enabled: true
        }}
        isNavExpanded
        isListExpanded={false}
      />
    );

    expect(screen.getByTestId('chevron')).toBeVisible();
    expect(screen.getByTestId('chevron')).toHaveClass('fi-sr-angle-small-down');
  });

  it('when there are no subItems, the ExpanderChevron should not be visible', () => {
    render(<MenuItemTitle details={{ id: 'some-id', label: 'label', subItems: [], enabled: true }} isNavExpanded isListExpanded />);

    expect(screen.queryByTestId('chevron')).not.toBeInTheDocument();
  });
});
