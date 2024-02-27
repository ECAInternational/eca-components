import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export function Tooltip(props) {
  const { content, icon = '', state = 'info', size = 'small', position = 'bottom', delay = 0, children } = props;

  const [visible, setVisible] = useState(false);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [tooltipID, setTooltipID] = useState('');
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [timeoutID, setTimeoutID] = useState(null);
  const hostRef = useRef(null);
  const tooltipRef = useRef(null);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
    showTooltip();
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    const hostElement = hostRef.current;
    if (hostElement.matches(':focus-within') && document.activeElement?.matches(':focus-visible')) return;
    hideTooltip();
  };

  const handleFocus = () => {
    showTooltip();
  };

  const handleBlur = () => {
    if (isMouseOver) return;
    hideTooltip();
  };

  const showTooltip = () => {
    if (visible) return;
    setTimeoutID(setTimeout(() => setVisible(true), delay));
  };

  const hideTooltip = () => {
    setVisible(false);
    if (timeoutID) clearTimeout(timeoutID);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      hideTooltip();
    }
  };

  useEffect(
    () => () => {
      document.addEventListener('keydown', handleKeyDown);
      if (timeoutID) clearTimeout(timeoutID);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    },
    []
  );

  useLayoutEffect(() => {
    let x = 0;
    let y = 0;
    if (visible) {
      const tooltipElement = tooltipRef.current;
      const hostElement = hostRef.current;
      const containerElement = document.body;

      let offsetElement = hostElement;
      while (offsetElement && offsetElement !== containerElement) {
        x += offsetElement.offsetLeft;
        y += offsetElement.offsetTop;
        offsetElement = offsetElement.offsetParent;
      }

      const offset = 8;
      switch (position) {
        case 'left':
          x -= tooltipElement.offsetWidth + offset;
          y += (hostElement.offsetHeight - tooltipElement.offsetHeight) / 2;
          break;
        case 'right':
          x += hostElement.offsetWidth + offset;
          y += (hostElement.offsetHeight - tooltipElement.offsetHeight) / 2;
          break;
        case 'top':
          x += (hostElement.offsetWidth - tooltipElement.offsetWidth) / 2;
          y -= tooltipElement.offsetHeight + offset;
          break;
        case 'bottom':
        default:
          x += (hostElement.offsetWidth - tooltipElement.offsetWidth) / 2;
          y += hostElement.offsetHeight + offset;
          break;
      }
    }

    x = Math.round(x);
    y = Math.round(y);

    setTransform({ x, y });
  }, [visible]);

  useLayoutEffect(() => {
    setTooltipID(`tooltip-${Math.random().toString(36).substring(2, 15)}`);
  }, [visible]);

  const states = {
    info: 'border-states-info bg-states-info-paler text-states-info-boldest',
    warning: 'border-states-warning bg-states-warning-paler text-states-warning-boldest',
    error: 'border-states-error bg-states-error-paler text-states-error-boldest'
  };

  const iconStates = {
    info: 'text-states-info',
    warning: 'text-states-warning',
    error: 'text-states-error'
  };

  const sizes = {
    small: 'text-xs font-regular py-1.5 px-2 rounded-sm',
    large: 'text-sm font-light p-3 rounded'
  };

  const positions = {
    top: '-bottom-px left-1/2 transform -translate-x-1/2 translate-y-1/2 border-b border-r rounded-br',
    right: '-left-px top-1/2 transform -translate-y-1/2 -translate-x-1/2 border-b border-l rounded-bl',
    bottom: '-top-px left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-t border-l rounded-tl',
    left: '-right-px top-1/2 transform -translate-y-1/2 translate-x-1/2 border-t border-r rounded-tr'
  };

  const tooltip = (
    <div ref={tooltipRef} className={`absolute top-0 left-0 will-change-transform border leading-none ${states[state]} ${sizes[size]}`} role='tooltip' id={tooltipID} style={{ transform: `translate(${transform.x}px, ${transform.y}px)` }}>
      <div className={`absolute w-2.5 h-2.5 rotate-45 z-0 ${states[state]} ${positions[position]}`} />
      <span className='relative flex'>
        {icon && <i className={`fi ${icon} ${iconStates[state]} flex items-center pe-1`} />}
        <span>{content}</span>
      </span>
    </div>
  );

  return (
    <>
      <span className='inline-block' ref={hostRef} aria-describedby={visible ? tooltipID : undefined} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onFocus={handleFocus} onBlur={handleBlur}>
        {children}
      </span>
      {visible && ReactDOM.createPortal(tooltip, document.body)}
    </>
  );
}

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string,
  state: PropTypes.oneOf(['info', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'large']),
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  delay: PropTypes.number,
  children: PropTypes.node.isRequired
};
