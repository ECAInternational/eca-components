import React from 'react';
import PropTypes from 'prop-types';

export function SegmentedButtons(props) {
  const { children } = props;

  return (
    <div className='flex w-full'>
      {React.Children.map(children, (child) => (
        <label
          key={child.props['aria-label']}
          htmlFor={child.props.id}
          className='relative group flex-1 cursor-pointer 
                text-sm text-neutral-body
                bg-controls-bg-unselected has-[:checked]:bg-neutral-layer-2 has-[:focus-visible]:z-0 z-10
                border border-controls-border border-l-0 first:border-l first:rounded-l last:rounded-r
                hover:border-controls-border-hover hover:border-l
                [&:has(+:hover)]:border-r-0'
        >
          {React.cloneElement(child, {
            className: `after:content-[attr(aria-label)] cursor-pointer appearance-none peer py-3 w-full text-center 
              group-only:rounded group-first:rounded-l group-last:rounded-r transition
              outline-2 outline-offset-2 outline-default-transparent focus:outline-controls-border focus:outline-offset-4 focus:checked:outline-controls-highlight`
          })}
          <div
            className='h-1.5 w-full peer-checked:bg-controls-highlight absolute bottom-0 
          group-hover:bg-neutral-detail-paler group-only:rounded-b group-first:rounded-bl group-last:rounded-br'
          />
        </label>
      ))}
    </div>
  );
}

SegmentedButtons.propTypes = {
  children: PropTypes.node.isRequired
};
