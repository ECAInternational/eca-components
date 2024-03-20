import React, { useState, useRef, useLayoutEffect, useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';

export interface TooltipProps {
  content: string;
  icon?: string;
  state?: 'info' | 'warning' | 'error';
  size?: 'small' | 'large';
  position?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
  children: ReactNode;
}

export function Tooltip(props: TooltipProps) {
  const { content, icon = '', state = 'info', size = 'small', position = 'bottom', delay = 0, children } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const [transform, setTransform] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [tooltipID, setTooltipID] = useState<string>('');
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const [timeoutID, setTimeoutID] = useState<ReturnType<typeof setTimeout> | null>(null);
  const hostRef = useRef<HTMLSpanElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
    showTooltip();
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    const hostElement = hostRef.current;
    if (hostElement && hostElement.matches(':focus-within') && document.activeElement?.matches(':focus-visible')) return;
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

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      hideTooltip();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    if (timeoutID) clearTimeout(timeoutID);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useLayoutEffect(() => {
    let x = 0;
    let y = 0;
    if (visible) {
      const tooltipElement = tooltipRef.current;
      const hostElement = hostRef.current;

      if (!tooltipElement || !hostElement) return;

      const containerElement = document.body;

      let offsetElement: HTMLElement | null = hostElement;
      while (offsetElement && offsetElement !== containerElement) {
        x += offsetElement.offsetLeft;
        y += offsetElement.offsetTop;
        offsetElement = offsetElement.offsetParent as HTMLElement;
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
    <div ref={tooltipRef} className={`absolute left-0 top-0 border leading-none will-change-transform ${states[state]} ${sizes[size]}`} role='tooltip' id={tooltipID} style={{ transform: `translate(${transform.x}px, ${transform.y}px)` }}>
      <div className={`absolute z-0 size-2.5 rotate-45 ${states[state]} ${positions[position]}`} />
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
