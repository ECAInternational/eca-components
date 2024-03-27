import React, { PropsWithChildren } from 'react';

export function DefaultOptionViewer({ children }: PropsWithChildren) {
  return <span className='block truncate text-neutral-body'>{children}</span>;
}
