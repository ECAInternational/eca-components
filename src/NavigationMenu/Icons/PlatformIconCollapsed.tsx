import React from 'react';

export function PlatformIconCollapsed() {
  return (
    <svg data-testid='platform-icon' width='40' height='40' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'>
      <defs>
        <linearGradient id='linear-gradient' x1='-3656.48' y1='11365.57' x2='-3646.59' y2='11365.57' gradientTransform='translate(11380.57 3670.32) rotate(90)' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#525252' />
          <stop offset='.11' stopColor='#777' />
          <stop offset='.25' stopColor='#a0a0a0' />
          <stop offset='.39' stopColor='#c2c2c2' />
          <stop offset='.54' stopColor='#ddd' />
          <stop offset='.68' stopColor='#f0f0f0' />
          <stop offset='.84' stopColor='#fbfbfb' />
          <stop offset='1' stopColor='#fff' />
        </linearGradient>
      </defs>
      <rect className='fill-primary-main' strokeWidth='0' x='0' y='0' width='30' height='30' rx='3.67' ry='3.67' />
      <g>
        <path fill='url(#linear-gradient)' strokeWidth='0' d='M10.45,20.57c1.36-2.52,4.53-3.5,7.05-2.14,1.95,1.05,2.94,3.19,2.67,5.27l4,.03c.27-3.51-1.5-7.01-4.8-8.79-4.46-2.41-10.04-.74-12.44,3.72-.85,1.57-1.19,3.28-1.08,4.94l4.02.03c-.11-1.02.07-2.09.59-3.07Z' />
        <path className='fill-default-white' strokeWidth='0' d='M19.55,9.43c-1.36,2.52-4.53,3.5-7.05,2.14-1.95-1.05-2.94-3.19-2.67-5.27l-4-.03c-.27,3.51,1.5,7.01,4.8,8.79,4.46,2.41,10.04.74,12.44-3.72.85-1.57,1.19-3.28,1.08-4.94l-4.02-.03c.11,1.02-.07,2.09-.59,3.07Z' />
      </g>
    </svg>
  );
}
