import React, { PropsWithChildren } from 'react';
import { useAutoCompleteOptionContext } from './AutoComplete.Option.tsx';

export function DefaultOptionViewer({ children }: PropsWithChildren) {
  const { selected, active } = useAutoCompleteOptionContext();
  return (
    <>
      <span className={`block truncate ${selected ? 'text-neutral-detail-bold' : 'text-neutral-detail'}`}>{children}</span>
      {selected ? (
        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-neutral-body' : 'text-neutral-detail'}`}>
          <i className='fi fi-rs-check size-5' aria-hidden='true' />
        </span>
      ) : null}
    </>
  );
}
