import React, { useState, useRef, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export function Tooltip(props) {
  const { content, state = 'info', size = 'small', position = 'bottom', delay = 0, children } = props;

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
    if (hostElement.matches(':focus-within')) return;
    hideTooltip();
  };

  const handleFocus = () => {
    showTooltip();
  };

  const handleBlur = () => {
    if (isMouseOver) return;
    hideTooltip();
  };

  const handleClick = () => hideTooltip();

  const showTooltip = () => {
    if (visible) return;
    const timeoutID = setTimeout(() => setVisible(true), delay);
    setTimeoutID(timeoutID);
  };

  const hideTooltip = () => {
    if (!visible) return;
    setVisible(false);
    timeoutID && clearTimeout(timeoutID);
  };

  useLayoutEffect(() => {
    let x = 0,
      y = 0;
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
    setTransform({ x, y });
  }, [visible]);

  useLayoutEffect(() => {
    setTooltipID(`tooltip-${Math.random().toString(36).substring(2, 15)}`);
  }, [visible]);

  const tooltip = (
    <div ref={tooltipRef} className='absolute top-0 left-0 will-change-transform' role='tooltip' id={tooltipID} style={{ transform: `translate(${transform.x}px, ${transform.y}px)` }}>
      {content}
    </div>
  );

  return (
    <>
      <span className='inline-block' ref={hostRef} aria-describedby={visible ? tooltipID : undefined} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onFocus={handleFocus} onBlur={handleBlur} onClick={handleClick}>
        {children}
      </span>
      {visible && ReactDOM.createPortal(tooltip, document.body)}
    </>
  );
}

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['info', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'large']),
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  delay: PropTypes.number,
  children: PropTypes.node.isRequired
};
