import React from 'react';

export function ExpandIcon() {
  return (
    <svg className='group-hover:stroke-controls-highlight' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' data-testid='expand-icon'>
      <path d='M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z' stroke='#9BA9B8' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M8 12H16' stroke='#9BA9B8' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M12 16L16 12L12 8' stroke='#9BA9B8' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}
