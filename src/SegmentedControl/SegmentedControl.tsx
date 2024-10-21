import React, { Children, isValidElement, cloneElement, PropsWithChildren } from 'react';

export interface SegmentedControlProps {
  name: string;
  id?: string;
  disabled?: boolean;
  size: 'small' | 'medium';
  className?: string;
}

export interface SegmentedControlChildProps extends HTMLInputElement {
  'data-highlight'?: 'default' | 'vis-1' | 'vis-2' | 'vis-3' | 'vis-4' | 'vis-5' | 'vis-6' | 'vis-7';
}

export function SegmentedControl(props: PropsWithChildren<SegmentedControlProps>) {
  const { id, name, children, className, disabled, size = 'medium' } = props;

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
    'vis-1': 'after:checked:bg-visualisation-1-main after:hover:checked:bg-visualisation-1-main disabled:checked:after:bg-visualisation-1-pale',
    'vis-2': 'after:checked:bg-visualisation-2-main after:hover:checked:bg-visualisation-2-main disabled:checked:after:bg-visualisation-2-pale',
    'vis-3': 'after:checked:bg-visualisation-3-main after:hover:checked:bg-visualisation-3-main disabled:checked:after:bg-visualisation-3-pale',
    'vis-4': 'after:checked:bg-visualisation-4-main after:hover:checked:bg-visualisation-4-main disabled:checked:after:bg-visualisation-4-pale',
    'vis-5': 'after:checked:bg-visualisation-5-main after:hover:checked:bg-visualisation-5-main disabled:checked:after:bg-visualisation-5-pale',
    'vis-6': 'after:checked:bg-visualisation-6-main after:hover:checked:bg-visualisation-6-main disabled:checked:after:bg-visualisation-6-pale',
    'vis-7': 'after:checked:bg-visualisation-7-main after:hover:checked:bg-visualisation-7-main disabled:checked:after:bg-visualisation-7-pale'
  };

  return (
    <div id={id || name} role='radiogroup' className={`flex rounded-md outline outline-2 outline-offset-2 outline-default-transparent has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-controls-highlight ${className}`}>
      {Children.map(children, (child) => {
        const isElement = isValidElement<SegmentedControlChildProps>(child);
        if (isElement) {
          const { disabled: childDisabled, 'data-highlight': highlight = 'default' } = child.props;
          return cloneElement<SegmentedControlChildProps>(child, {
            disabled: disabled || childDisabled,
            name,
            className: `cursor-pointer peer appearance-none w-full z-10 overflow-hidden transition text-neutral-body
              flex flex-col items-center justify-center bg-controls-bg-unselected ${sizes.input[size]}
              border border-controls-border border-l-0 outline-none first:border-l first:rounded-l-md last:rounded-r-md
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
  );
}
