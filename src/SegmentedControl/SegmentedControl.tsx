import React, { Children, isValidElement, cloneElement, PropsWithChildren } from 'react';

export interface SegmentedControlProps {
  name: string;
  id?: string;
  disabled?: boolean;
  size: 'small' | 'medium';
  label?: string;
  description?: string;
}

export interface SegmentedControlChildProps extends HTMLInputElement {
  'data-highlight'?: 'default' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red';
}

export function SegmentedControl(props: PropsWithChildren<SegmentedControlProps>) {
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

  const highlights = {
    default: 'after:checked:bg-controls-highlight after:hover:checked:bg-controls-highlight disabled:checked:after:bg-controls-highlight-pale',
    orange: 'after:checked:bg-visualisation-1-main after:hover:checked:bg-visualisation-1-main disabled:checked:after:bg-visualisation-1-pale',
    yellow: 'after:checked:bg-visualisation-2-main after:hover:checked:bg-visualisation-2-main disabled:checked:after:bg-visualisation-2-pale',
    green: 'after:checked:bg-visualisation-3-main after:hover:checked:bg-visualisation-3-main disabled:checked:after:bg-visualisation-3-pale',
    blue: 'after:checked:bg-visualisation-4-main after:hover:checked:bg-visualisation-4-main disabled:checked:after:bg-visualisation-4-pale',
    purple: 'after:checked:bg-visualisation-5-main after:hover:checked:bg-visualisation-5-main disabled:checked:after:bg-visualisation-5-pale',
    pink: 'after:checked:bg-visualisation-6-main after:hover:checked:bg-visualisation-6-main disabled:checked:after:bg-visualisation-6-pale',
    red: 'after:checked:bg-visualisation-7-main after:hover:checked:bg-visualisation-7-main disabled:checked:after:bg-visualisation-7-pale'
  };

  const labelID = `${id || name}-label`;

  return (
    <div role='radiogroup' aria-labelledby={labelID} className='text-controls-content-disabled has-[:enabled]:text-neutral-detail-bolder'>
      {label && (
        <span id={labelID} className='block py-1 transition-all label-sm-mid'>
          {label}
          {description && <span className='ps-1 paragraph-sm-lighter'>{description}</span>}
        </span>
      )}
      <div className='flex rounded outline outline-2 outline-offset-2 outline-default-transparent has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-controls-highlight'>
        {Children.map(children, (child) => {
          const isElement = isValidElement<SegmentedControlChildProps>(child);
          if (isElement) {
            const { disabled: childDisabled, 'data-highlight': highlight = 'default' } = child.props;
            return cloneElement<SegmentedControlChildProps>(child, {
              disabled: disabled || childDisabled,
              name,
              className: `cursor-pointer peer appearance-none w-full z-10 relative overflow-hidden transition text-neutral-body
              flex flex-col items-center justify-center bg-controls-bg-unselected ${sizes.input[size]}
              border border-controls-border border-l-0 outline-none first:border-l first:rounded-l last:rounded-r
              before:content-[attr(aria-label)] before:paragraph-sm-lighter
              after:content-[''] ${sizes.highlight[size]} after:w-full 
              ${highlights[highlight]}
              checked:bg-neutral-layer-2
              hover:after:bg-neutral-detail-paler hover:border-controls-border-hover
              active:bg-controls-highlight-palest active:after:bg-controls-highlight-pale active:checked:bg-neutral-layer-2
              disabled:bg-neutral-layer-1 disabled:text-controls-content-disabled disabled:border-neutral-detail-paler disabled:cursor-not-allowed
              disabled:after:bg-default-transparent`
            });
          }
          return null;
        })}
      </div>
    </div>
  );
}
