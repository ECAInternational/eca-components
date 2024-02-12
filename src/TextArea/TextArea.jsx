import React from 'react';
import PropTypes from 'prop-types';

export function TextArea(props) {
  const { name, id, label, state = 'default', description, maxLength = 0, disabled, ...others } = props;
  const [count, setCount] = React.useState(0);

  const validate = maxLength > 0;
  const invalid = validate && count > maxLength;
  let charCount = count;
  if (validate) {
    charCount = invalid ? count - maxLength : maxLength - count;
  }
  let charCountLabel = `${charCount} character${charCount === 1 ? '' : 's'}`;
  if (validate) {
    charCountLabel += invalid ? ' too many' : ' remaing';
  }
  const charCountLabelId = `${id || name}_count`;

  const border = {
    default: 'border-controls-border',
    error: 'border-states-error-accent'
  };

  const hover = {
    default: 'hover:outline-neutral-detail-paler',
    error: 'hover:border-states-error-accent hover:outline-states-error'
  };

  const focus = {
    default: 'focus-within:border-controls-highlight hover:focus-within:outline-controls-highlight focus-within:outline-controls-highlight',
    error: 'focus-within:outline-states-error-accent hover:focus-within:outline-states-error-accent'
  };

  return (
    <div className='text-neutral-detail-bolder has-[:disabled]:text-controls-content-disabled'>
      {label && (
        <label htmlFor={id} className='text-sm block py-1 transition-all'>
          {label}
          {description && <span className='font-light ps-1'>{description}</span>}
        </label>
      )}
      <textarea
        id={id || name}
        rows={1}
        name={name}
        disabled={disabled}
        {...others}
        className={`p-3 w-full text-sm font-light text-neutral-body border rounded relative transition resize peer
        outline outline-2 outline-offset-2 outline-default-transparent
        placeholder-controls-placeholder-text placeholder-opacity-60 focus:placeholder-default-transparent
        disabled:bg-neutral-layer-1 disabled:border-neutral-detail-paler disabled:text-controls-content-disabled disabled:outline-0
        disabled:placeholder-controls-content-disabled disabled:placeholder-opacity-60
        disabled:text-opacity-60 disabled:cursor-not-allowed
        ${hover[invalid ? 'error' : state]} 
        ${border[invalid ? 'error' : state]} 
        ${focus[invalid ? 'error' : state]}`}
        onChange={(e) => setCount(e.target.value.length)}
        aria-describedby={charCountLabelId}
        {...(invalid ? { 'aria-invalid': true } : {})}
      />
      <p
        id={charCountLabelId}
        className={`text-sm font-light mt-1
        ${validate ? '' : 'hidden'}
        ${invalid ? 'text-states-error-accent' : 'invisible peer-focus:visible peer-focus:text-controls-highlight'}`}
      >
        {charCountLabel}
      </p>
    </div>
  );
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  state: PropTypes.string,
  description: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool
};
