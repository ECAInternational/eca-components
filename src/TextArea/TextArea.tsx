import React, { useEffect, useState, useCallback } from 'react';

const styles = {
  shadow: {
    visibility: 'hidden' as 'hidden',
    position: 'absolute' as 'absolute',
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    transform: 'translateZ(0)'
  }
};

const isEmpty = (obj: any) => obj === undefined || obj === null || Object.keys(obj).length === 0 || (obj.outerHeightStyle === 0 && !obj.overflowing);

const getStyleValue = (v: string) => parseInt(v, 10) || 0;

export interface TextAreaProps {
  name: string;
  id: string;
  label: string;
  description: string;
  state?: string;
  placeholder: string;
  value: string;
  maxLength: number;
  minRows?: number;
  maxRows?: number;
  disabled: boolean;
  onChange: any;
  [key: string]: any;
}

export function TextArea(props: TextAreaProps) {
  const { name, id, label, description, state = 'default', placeholder, value, maxLength, minRows = 1, maxRows, disabled, onChange, ...others } = props;
  const [count, setCount] = useState(value?.length ?? 0);

  const { current: isControlled } = React.useRef(value !== undefined);
  const inputRef = React.useRef<HTMLTextAreaElement | null>(null);
  const shadowRef = React.useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    syncHeight();
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(e);
    }

    setCount(e.target.value.length);
  };

  let charCount;
  let charCountLabel;
  let invalid = false;
  const charCountLabelId = `${id || name}_count`;

  if (maxLength) {
    invalid = count > maxLength;
    charCount = invalid ? count - maxLength : maxLength - count;
    charCountLabel = `${charCount} character${charCount > 1 ? 's' : ''} ${invalid ? ' too many' : ' remaining'}`;
  }

  const calculateTextareaStyles = useCallback((): { outerHeightStyle: number; overflowing: boolean } | undefined => {
    const input = inputRef.current;

    if (!input) {
      return { outerHeightStyle: 0, overflowing: false };
    }

    const ownerDocument = (input && input.ownerDocument) || document;
    const containerWindow = ownerDocument.defaultView || window;
    const computedStyle = containerWindow.getComputedStyle(input);
    const inputShallow = shadowRef.current;

    if (!inputShallow) {
      return { outerHeightStyle: 0, overflowing: false };
    }

    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || placeholder || 'x';
    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }

    const { boxSizing } = computedStyle;
    const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);

    // The height of the inner content
    const innerHeight = inputShallow.scrollHeight;

    // Measure height of a textarea with a single row
    inputShallow.value = 'x';
    const singleRowHeight = inputShallow.scrollHeight;

    // The height of the outer content
    let outerHeight = innerHeight;

    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);

    // Take the box sizing into account for applying this value as a style.
    const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    const overflowing = Math.abs(outerHeight - innerHeight) <= 1;

    return { outerHeightStyle, overflowing };
  }, [maxRows, minRows, placeholder]);

  const syncHeight = useCallback(() => {
    const textareaStyles = calculateTextareaStyles();

    if (isEmpty(textareaStyles)) {
      return;
    }

    const input = inputRef.current;
    if (input && textareaStyles) {
      input.style.height = `${textareaStyles.outerHeightStyle}px`;
      input.style.overflow = textareaStyles.overflowing ? 'hidden' : '';
    }
  }, [calculateTextareaStyles]);

  const border = {
    default: 'border-controls-border',
    error: 'border-states-error'
  };

  const hover = {
    default: 'hover:outline-neutral-detail-paler',
    error: 'hover:border-states-error-accent hover:outline-states-error-paler'
  };

  const focus = {
    default: 'focus-within:border-controls-highlight hover:focus-within:outline-controls-highlight focus-within:outline-controls-highlight',
    error: 'focus-within:outline-states-error hover:focus-within:outline-states-error'
  };

  const className = `p-3 w-full text-sm font-light bg-default-transparent text-neutral-body border rounded relative transition resize peer
  outline outline-2 outline-offset-2 outline-default-transparent
  placeholder-controls-placeholder-text placeholder-opacity-60 focus:placeholder-default-transparent
  disabled:bg-neutral-layer-1 disabled:border-neutral-detail-paler disabled:text-controls-content-disabled disabled:outline-0
  disabled:placeholder-controls-content-disabled disabled:placeholder-opacity-60
  disabled:text-opacity-60 disabled:cursor-not-allowed
  ${hover[invalid ? 'error' : (state as keyof typeof hover)]}
  ${border[invalid ? 'error' : (state as keyof typeof border)]}
  ${focus[invalid ? 'error' : (state as keyof typeof focus)]}`;

  return (
    <div className='text-neutral-detail-bolder has-[:disabled]:text-controls-content-disabled'>
      {label && (
        <label htmlFor={id} className='block py-1 text-sm transition-all'>
          {label}
          {description && <span className='ps-1 font-light'>{description}</span>}
        </label>
      )}
      <textarea onChange={handleChange} id={id || name} name={name} value={value} rows={minRows} disabled={disabled} placeholder={placeholder} {...others} className={className} ref={inputRef} aria-describedby={charCountLabelId} {...(invalid ? { 'aria-invalid': true } : {})} />
      <textarea aria-hidden className={className} readOnly ref={shadowRef} tabIndex={-1} style={{ ...styles.shadow, paddingTop: 0, paddingBottom: 0 }} />
      {maxLength && (
        <p
          id={charCountLabelId}
          className={`mt-1 text-sm font-light
        ${invalid ? 'text-states-error' : 'invisible peer-focus:visible peer-focus:text-controls-highlight'}`}
        >
          {charCountLabel}
        </p>
      )}
    </div>
  );
}
