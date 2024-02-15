import React from 'react';
import PropTypes from 'prop-types';

function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}

const styles = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};

function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0 || (obj.outerHeightStyle === 0 && !obj.overflowing);
}

// const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

// function debounce(func, wait = 166) {
//   let timeout;
//   function debounced(...args) {
//     const later = () => {
//       func.apply(this, args);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   }
//   debounced.clear = () => {
//     clearTimeout(timeout);
//   };

//   return debounced;
// }

export function TextArea(props) {
  const { name, id, label, description, state = 'default', placeholder, value, maxLength = 0, minRows = 1, maxRows, disabled, onChange, ...others } = props;
  const [count, setCount] = React.useState(value != null ? value.length : 0);

  const { current: isControlled } = React.useRef(value != null);
  const inputRef = React.useRef();
  const shadowRef = React.useRef();

  const calculateTextareaStyles = React.useCallback(() => {
    const input = inputRef.current;

    const ownerDocument = (input && input.ownerDocument) || document;
    const containerWindow = ownerDocument.defaultView || window;
    const computedStyle = containerWindow.getComputedStyle(input);

    // If input's width is shrunk and it's not visible, don't sync height.
    if (computedStyle.width === '0px') {
      return {
        outerHeightStyle: 0,
        overflowing: false
      };
    }

    const inputShallow = shadowRef.current;

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

  const syncHeight = React.useCallback(() => {
    const textareaStyles = calculateTextareaStyles();

    if (isEmpty(textareaStyles)) {
      return;
    }

    const input = inputRef.current;
    input.style.height = `${textareaStyles.outerHeightStyle}px`;
    input.style.overflow = textareaStyles.overflowing ? 'hidden' : '';
  }, [calculateTextareaStyles]);

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

  // useEnhancedEffect(() => {
  //   const handleResize = () => {
  //     syncHeight();
  //   };
  //   // Workaround a "ResizeObserver loop completed with undelivered notifications" error
  //   // in test.
  //   // Note that we might need to use this logic in production per https://github.com/WICG/resize-observer/issues/38
  //   let rAF;
  //   const rAFHandleResize = () => {
  //     cancelAnimationFrame(rAF);
  //     rAF = requestAnimationFrame(() => {
  //       handleResize();
  //     });
  //   };
  //   const debounceHandleResize = debounce(handleResize);
  //   const input = inputRef.current;
  //   const ownerDocument = (input && input.ownerDocument) || document;
  //   const containerWindow = ownerDocument.defaultView || window;

  //   containerWindow.addEventListener('resize', debounceHandleResize);

  //   let resizeObserver;

  //   if (typeof ResizeObserver !== 'undefined') {
  //     resizeObserver = new ResizeObserver(
  //       process.env.NODE_ENV === 'test' ? rAFHandleResize : handleResize,
  //     );
  //     resizeObserver.observe(input);
  //   }

  //   return () => {
  //     debounceHandleResize.clear();
  //     cancelAnimationFrame(rAF);
  //     containerWindow.removeEventListener('resize', debounceHandleResize);
  //     if (resizeObserver) {
  //       resizeObserver.disconnect();
  //     }
  //   };
  // }, [calculateTextareaStyles, syncHeight]);

  // useEnhancedEffect(() => {
  //   syncHeight();
  // });

  const handleChange = (event) => {
    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }

    setCount(event.target.value.length);
  };

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

  const className = `p-3 w-full text-sm font-light bg-default-transparent text-neutral-body border rounded relative transition resize peer
  outline outline-2 outline-offset-2 outline-default-transparent
  placeholder-controls-placeholder-text placeholder-opacity-60 focus:placeholder-default-transparent
  disabled:bg-neutral-layer-1 disabled:border-neutral-detail-paler disabled:text-controls-content-disabled disabled:outline-0
  disabled:placeholder-controls-content-disabled disabled:placeholder-opacity-60
  disabled:text-opacity-60 disabled:cursor-not-allowed
  ${hover[invalid ? 'error' : state]} 
  ${border[invalid ? 'error' : state]} 
  ${focus[invalid ? 'error' : state]}`;

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
        name={name}
        value={value}
        // Apply the rows prop to get a "correct" first SSR paint
        rows={minRows}
        disabled={disabled}
        {...others}
        className={className}
        onChange={handleChange}
        ref={inputRef}
        aria-describedby={charCountLabelId}
        {...(invalid ? { 'aria-invalid': true } : {})}
      />
      <textarea
        aria-hidden
        className={className}
        readOnly
        ref={shadowRef}
        tabIndex={-1}
        style={{
          ...styles.shadow,
          paddingTop: 0,
          paddingBottom: 0
        }}
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
  description: PropTypes.string,
  state: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
