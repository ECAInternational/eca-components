import React from 'react';
import PropTypes from 'prop-types';

export function SegmentedButtons(props) {
  const { children, disabled, size = 'medium' } = props;

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

  return (
    <div className='flex w-full'>
      {React.Children.map(children, (child) => (
        <>
          {React.cloneElement(child, {
            disabled: disabled || child.props.disabled,
            className: `cursor-pointer peer appearance-none w-full z-10 relative overflow-hidden transition text-neutral-body
            flex flex-col items-center justify-center bg-controls-bg-unselected ${sizes.input[size]}
            border border-controls-border border-l-0 first:border-l first:rounded-l last:rounded-r
            outline outline-2 outline-offset-2 outline-default-transparent
            before:content-[attr(aria-label)] before:text-sm
            after:content-[''] ${sizes.highlight[size]} after:w-full after:checked:bg-controls-highlight after:hover:checked:bg-controls-highlight
            checked:bg-neutral-layer-2
            hover:after:bg-neutral-detail-paler hover:border-controls-border-hover
            focus:z-0 focus:outline-controls-border focus:outline-offset-4 focus:checked:outline-controls-highlight
            active:bg-controls-highlight-palest active:after:bg-controls-highlight-pale active:checked:bg-neutral-layer-2
            disabled:bg-neutral-layer-1 disabled:text-controls-content-disabled disabled:border-neutral-detail-paler disabled:cursor-not-allowed
            disabled:after:bg-default-transparent disabled:checked:after:bg-controls-highlight-pale`
          })}
        </>
      ))}
    </div>
  );
}

SegmentedButtons.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium'])
};
