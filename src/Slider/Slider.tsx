import { Ranger, RangerOptions, useRanger } from '@tanstack/react-ranger';
import React from 'react';
import { Tooltip } from '../Tooltip/Tooltip';

export interface SliderProps {
  name: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  min: number;
  max: number;
  marks: { value: number; label: string }[];
  value: number;
  variant?: 'discrete';
  onChange?: (value: number) => void;
}

export function Slider(props: SliderProps) {
  const { name, id, className, disabled, min, max, marks = [], onChange, value, variant = 'discrete', ...others } = props;

  const rangerRef = React.useRef<HTMLDivElement>(null);
  const handleRef = React.useRef<HTMLButtonElement>(null);
  const [values, setValues] = React.useState<ReadonlyArray<number>>([value]);
  const rangerOptions: RangerOptions<HTMLDivElement> = {
    getRangerElement: () => rangerRef.current,
    values,
    min,
    max,
    steps: marks.map((mark) => mark.value),
    onChange: (instance: Ranger<HTMLDivElement>) => handleOnChange(instance.sortedValues[0]),
    onDrag: (instance: Ranger<HTMLDivElement>) => handleOnChange(instance.sortedValues[0])
  };
  const rangerInstance = useRanger<HTMLDivElement>(rangerOptions);

  const { onKeyDownHandler, onMouseDownHandler, onTouchStart } = rangerInstance.handles()[0];
  const mark = marks.find((mark) => mark.value === value);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    const newValue = rangerInstance.getValueForClientX(e.clientX);
    const step = rangerInstance.roundToStep(newValue);
    handleRef.current?.focus();
    handleOnChange(step);
  };

  const handleOnChange = (newValue: number) => {
    setValues([newValue]);
    if (onChange) {
      onChange(newValue);
    }
  };

  // Extend tanstack react-ranger with more keydown handlers
  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        const nextValue = rangerInstance.getNextStep(value, 1);
        handleOnChange(nextValue);
        break;
      case 'ArrowDown':
        e.preventDefault();
        const prevValue = rangerInstance.getNextStep(value, -1);
        handleOnChange(prevValue);
        break;
      case 'Home':
        e.preventDefault();
        handleOnChange(rangerInstance.options.min);
        break;
      case 'End':
        e.preventDefault();
        handleOnChange(rangerInstance.options.max);
        break;
      default:
        onKeyDownHandler(e);
    }
  };

  return (
    <div ref={rangerRef} onClick={onClickHandler} className={`relative mt-2 h-2 ${variant === 'discrete' ? 'mb-4' : 'mb-2'} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} rounded-full bg-neutral-detail-palest ${className === undefined ? '' : className}`} {...others}>
      <div className={`absolute h-full rounded-full ${disabled ? 'cursor-not-allowed bg-controls-content-disabled' : 'bg-controls-highlight'}`} style={{ width: `${rangerInstance.getPercentageForValue(value)}%` }}></div>
      <Tooltip
        content={mark?.label || value.toString()}
        position='top'
        className='absolute'
        style={{
          left: `${rangerInstance.getPercentageForValue(value)}%`,
          top: '-100%'
        }}
      >
        <button id={id || name} ref={handleRef} role='slider' aria-valuemin={rangerInstance.options.min} aria-valuemax={rangerInstance.options.max} aria-valuenow={value} disabled={disabled} onKeyDown={handleOnKeyDown} onMouseDown={onMouseDownHandler} onTouchStart={onTouchStart} className={`group absolute top-1/2 -translate-x-1/2 -translate-y-2 p-2 outline-none ${disabled ? 'pointer-events-none cursor-not-allowed' : ''}`}>
          <div className={`flex size-6 items-center justify-center rounded-full border ${disabled ? 'border-controls-border-disabled bg-neutral-detail-palest' : 'border-controls-border bg-neutral-layer-2'} group-focus:border-2 group-enabled:group-hover:border-2 group-enabled:group-hover:border-neutral-detail-pale group-enabled:group-focus:border-controls-highlight`}>{disabled ? null : <div className='size-3 rounded-full group-hover:bg-neutral-detail-pale group-focus:bg-controls-highlight'></div>}</div>
        </button>
      </Tooltip>
      {variant === 'discrete' ? rangerInstance.getTicks().map(({ key, percentage }) => <span key={key} className={`absolute -bottom-4 h-2 w-0 -translate-x-px border ${disabled ? 'border-neutral-detail-paler' : 'border-neutral-detail-pale'}`} style={{ left: `${percentage}%` }}></span>) : null}
    </div>
  );
}
