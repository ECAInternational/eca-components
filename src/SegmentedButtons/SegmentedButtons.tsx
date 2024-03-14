import React, { ReactElement, Children, cloneElement } from 'react';

export interface SegmentedButtonsProps {
  name: string;
  id?: string;
  disabled?: boolean;
  children: ReactElement<HTMLInputElement>[];
  size: 'small' | 'medium';
  label?: string;
  description?: string;
}

export function SegmentedButtons(props: SegmentedButtonsProps) {
  const { id, name, children, disabled, size = 'medium', label, description } = props;

  const sizes = {
    input: {
      small: 'pt-2 gap-1',
      medium: 'pt-3 gap-1.5'
    },
    highlight: {
      small: 'after:h-1',
      medium: 'after:h-1.5'
    }
  };

  const labelID = `${id || name}-label`;

  return (
    <div role='radiogroup' aria-labelledby={labelID} className='text-controls-content-disabled has-[:enabled]:text-neutral-detail-bolder'>
      {label && (
        <span id={labelID} className='text-sm block py-1 transition-all'>
          {label}
          {description && <span className='font-light ps-1'>{description}</span>}
        </span>
      )}
      <div className='flex'>
        {Children.map(children, (child: ReactElement<HTMLInputElement>) => (
          <>
            {cloneElement(child as ReactElement<any>, {
              disabled: disabled || (child && child.props.disabled),
              name,
              className: `cursor-pointer peer appearance-none w-full z-10 relative overflow-hidden transition text-neutral-body
            flex flex-col items-center justify-center bg-controls-bg-unselected ${sizes.input[size]}
            border border-controls-border border-l-0 first:border-l first:rounded-l last:rounded-r
            outline outline-2 outline-offset-2 outline-default-transparent
            before:content-[attr(aria-label)] before:text-sm
            after:content-[''] ${sizes.highlight[size]} after:w-full after:checked:bg-controls-highlight after:hover:checked:bg-controls-highlight
            checked:bg-neutral-layer-2
            hover:after:bg-neutral-detail-paler hover:border-controls-border-hover
            focus-visible:z-0 focus-visible:outline-controls-border focus-visible:outline-offset-4 focus-visible:checked:outline-controls-highlight
            active:bg-controls-highlight-palest active:after:bg-controls-highlight-pale active:checked:bg-neutral-layer-2
            disabled:bg-neutral-layer-1 disabled:text-controls-content-disabled disabled:border-neutral-detail-paler disabled:cursor-not-allowed
            disabled:after:bg-default-transparent disabled:checked:after:bg-controls-highlight-pale`
            })}
          </>
        ))}
      </div>
    </div>
  );
}
