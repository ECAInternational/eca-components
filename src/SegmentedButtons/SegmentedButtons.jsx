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
                border border-controls-border hover:border-controls-border-hover -mx-px z-10
                first:rounded-l first:-mr-px first:z-0 last:rounded-r last:-ml-px last:z-0 only:border only:mx-0'
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
