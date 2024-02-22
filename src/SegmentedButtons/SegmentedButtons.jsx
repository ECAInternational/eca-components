import React from 'react';
import PropTypes from 'prop-types';

export function SegmentedButtons(props) {
  const { children } = props;

  return (
    <div className='flex w-full'>
      {React.Children.map(children, (child) => (
        <>
          {React.cloneElement(child, {
            className: `cursor-pointer peer appearance-none w-full z-10 pt-3 relative overflow-hidden
            text-sm text-neutral-body gap-1.5
            flex flex-col items-center justify-center
            bg-controls-bg-unselected checked:bg-neutral-layer-2 focus:z-0 
            border border-controls-border border-l-0 first:border-l first:rounded-l last:rounded-r
            hover:border-controls-border-hover
            before:content-[attr(aria-label)]
            after:content-[''] after:h-1.5 after:w-full
            after:checked:bg-controls-highlight 
            after:hover:checked:bg-controls-highlight 
            hover:after:bg-neutral-detail-paler
            outline outline-2 outline-offset-2 outline-default-transparent focus:outline-controls-border focus:outline-offset-4 focus:checked:outline-controls-highlight`
          })}
        </>
      ))}
    </div>
  );
}

SegmentedButtons.propTypes = {
  children: PropTypes.node.isRequired
};
