import React from 'react';
import PropTypes from 'prop-types';

export function SegmentedButtons(props) {
  const { children } = props;

  return (
    <div className='flex w-full'>
      {React.Children.map(children, (child, index) => (
        <label
          key={index}
          className='group flex-1 flex flex-col items-center justify-center cursor-pointer gap-1.5 pt-3 
                text-sm text-neutral-body overflow-hidden
                bg-neutral-layer-2 has-[:checked]:bg-neutral-layer-2
                border border-controls-border border-l-0 first:border-l first:rounded-l last:rounded-r
                hover:border-controls-border-hover hover:border-l
                [&:has(+:hover)]:border-r-0'
        >
          {React.cloneElement(child, {
            className: `after:content-[attr(aria-label)] after:cursor-pointer appearance-none peer`
          })}
          <div className='h-1.5 w-full peer-checked:bg-controls-highlight group-hover:bg-neutral-detail-paler' />
        </label>
      ))}
    </div>
  );
}

SegmentedButtons.propTypes = {
  children: PropTypes.node.isRequired
};
