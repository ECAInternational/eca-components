import React, { useState, useRef, useLayoutEffect, useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';

export interface TooltipProps {
  content: string;
  icon?: string;
  state?: 'neutral' | 'info' | 'warning' | 'error';
  size?: 'small' | 'large';
  position?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disableHoverListener?: boolean;
  disableFocusListener?: boolean;
}

export function Tooltip(props: TooltipProps) {
  const { content, icon = '', state = 'neutral', size = 'small', position = 'bottom', delay = 0, children, className, style, disableHoverListener, disableFocusListener } = props;

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
    if (hostElement?.matches(':focus-within') || document.activeElement?.matches(':focus-visible')) return;
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

  const handleDocumentScroll = () => {
    hideTooltip();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('scroll', handleDocumentScroll, { passive: true, capture: true });
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('scroll', handleDocumentScroll);
      if (timeoutID) clearTimeout(timeoutID);
    };
  }, []);

  useLayoutEffect(() => {
    let x = 0;
    let y = 0;
    if (visible) {
      const tooltipElement = tooltipRef.current;
      const hostElement = hostRef.current;

      if (!tooltipElement || !hostElement) return;

      const clientRect = hostElement.getBoundingClientRect();
      x = clientRect.x + window.scrollX;
      y = clientRect.y + window.scrollY;

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
  }, [visible, content]);

  useLayoutEffect(() => {
    setTooltipID(`tooltip-${Math.random().toString(36).substring(2, 15)}`);
  }, [visible]);

  const states = {
    neutral: 'border-controls-lines-pale bg-neutral-layer-2 text-neutral-detail-boldest',
    info: 'border-states-info bg-states-info-pale text-states-info-boldest',
    warning: 'border-states-warning bg-states-warning-pale text-states-warning-boldest',
    error: 'border-states-error bg-states-error-paler text-states-error-boldest'
  };

  const iconStates = {
    neutral: 'text-neutral-detail-boldest',
    info: 'text-states-info',
    warning: 'text-states-warning',
    error: 'text-states-error'
  };

  const sizes = {
    small: 'label-xs-lighter py-1.5 px-2 rounded-sm',
    large: 'paragraph-sm-lighter p-3 rounded'
  };

  const positions = {
    top: '-bottom-px left-1/2 transform -translate-x-1/2 translate-y-1/2 border-b border-r rounded-br',
    right: '-left-px top-1/2 transform -translate-y-1/2 -translate-x-1/2 border-b border-l rounded-bl',
    bottom: '-top-px left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-t border-l rounded-tl',
    left: '-right-px top-1/2 transform -translate-y-1/2 translate-x-1/2 border-t border-r rounded-tr'
  };

  const tooltip = (
    <div ref={tooltipRef} className={`leading-none absolute left-0 top-0 border will-change-transform ${states[state]} ${sizes[size]}`} role='tooltip' id={tooltipID} style={{ transform: `translate(${transform.x}px, ${transform.y}px)` }}>
      <div className={`absolute z-0 size-2.5 rotate-45 ${states[state]} ${positions[position]}`} />
      <span className='flex'>
        {icon && <i className={`fi ${icon} ${iconStates[state]} flex items-center pe-1`} />}
        <span>{content}</span>
      </span>
    </div>
  );

  return (
    <>
      <span className={`inline-block ${className}`} style={style} ref={hostRef} aria-describedby={visible ? tooltipID : undefined} onMouseEnter={disableHoverListener ? undefined : handleMouseEnter} onMouseLeave={disableHoverListener ? undefined : handleMouseLeave} onFocus={disableFocusListener ? undefined : handleFocus} onBlur={disableFocusListener ? undefined : handleBlur}>
        {children}
      </span>
      {visible && ReactDOM.createPortal(tooltip, document.body)}
    </>
  );
}
