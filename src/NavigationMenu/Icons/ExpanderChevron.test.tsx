import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExpanderChevron } from './ExpanderChevron.tsx';
import '@testing-library/jest-dom';

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
