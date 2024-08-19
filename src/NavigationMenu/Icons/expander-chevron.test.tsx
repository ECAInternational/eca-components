import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExpanderChevron } from './ExpanderChevron.tsx';

describe('ExpanderChevron', () => {
  it("when isListExpanded is true shows the 'up' class", () => {
    render(<ExpanderChevron isListExpanded />);

    expect(screen.getByTestId('chevron')).toHaveClass('fi-sr-angle-small-up');
  });

  it("when isListExpanded is false shows the 'down' class", () => {
    render(<ExpanderChevron isListExpanded={false} />);

    expect(screen.getByTestId('chevron')).toHaveClass('fi-sr-angle-small-down');
  });
});
