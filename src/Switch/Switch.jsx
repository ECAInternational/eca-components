import React from 'react';
import PropTypes from 'prop-types';

export function Switch(props) {
  const { name, id, label, alignment = 'left', checked, disabled = false, ...others } = props;

  return (
    <div className={`flex ${alignment === 'top' && 'flex-col'} items-center text-neutral-detail-bolder has-[:disabled]:text-controls-content-disabled`}>
      {label && alignment === 'top' && (
        <label htmlFor={id} className='text-sm font-light pb-1 transition'>
          {label}
        </label>
      )}

      {label && alignment === 'left' && (
        <label htmlFor={id} className='text-sm font-light pe-2 transition'>
          {label}
        </label>
      )}

      <div className='flex items-center'>
        <input
          type='checkbox'
          id={id || name}
          name={name}
          disabled={disabled}
          checked={checked}
          value={checked}
          {...others}
          className='peer cursor-pointer appearance-none w-12 h-7 p-px border border-neutral-detail rounded-full place-content-center grid transition
          outline outline-2 outline-offset-2 outline-default-transparent outline-offset-default-transparent bg-controls-highlight-palest

          before:content[""] before:w-5 before:h-5 before:-translate-x-1/2 before:bg-neutral-detail before:rounded-full before:transition

          disabled:border-neutral-detail-paler disabled:bg-neutral-detail-palest disabled:hover:outline-0 disabled:cursor-not-allowed
          disabled:before:bg-neutral-detail-pale disabled:before:opacity-60

          active:border-neutral-detail-bold active:outline-4 active:outline-offset-0 active:outline-neutral-detail-palest
          active:before:bg-neutral-detail-bold

          hover:outline-neutral-detail-paler
          focus-visible:outline-controls-border

          checked:border-controls-highlight
          checked:before:translate-x-1/2 checked:before:bg-controls-highlight checked:disabled:before:bg-controls-highlight-pale
          checked:disabled:bg-controls-bg-disabled checked:disabled:border-controls-highlight-pale
          checked:hover:outline-controls-highlight-paler
          checked:focus-visible:outline-controls-highlight
          checked:active:outline-controls-highlight-palest checked:active:bg-controls-highlight-palest checked:active:border-controls-highlight-bold
          checked:active:before:bg-controls-highlight-bold'
        />
        <input type='hidden' name={name} value={checked} />
      </div>
      {label && alignment === 'right' && (
        <label htmlFor={id} className='text-sm font-light ps-2'>
          {label}
        </label>
      )}
    </div>
  );
}

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  alignment: PropTypes.oneOf(['left', 'right', 'top'])
};
