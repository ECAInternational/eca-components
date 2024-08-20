import { Ranger, useRanger } from '@tanstack/react-ranger';
import React, { InputHTMLAttributes, useLayoutEffect } from 'react';
import { Tooltip } from '../Tooltip/Tooltip';

export interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id?: string;
}

export function Slider(props: SliderProps) {
  const { name, id, className, ...others } = props;

  const rangerRef = React.useRef<HTMLDivElement>(null);
  const handleRef = React.useRef<HTMLButtonElement>(null);
  const [values, setValues] = React.useState<ReadonlyArray<number>>([0]);

  useLayoutEffect(() => {}, [values]);

  const rangerInstance = useRanger<HTMLDivElement>({
    getRangerElement: () => rangerRef.current,
    values,
    min: 0,
    max: 100,
    steps: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    onChange: (instance: Ranger<HTMLDivElement>) => setValues(instance.sortedValues)
  });

  const { value, onKeyDownHandler, onMouseDownHandler, onTouchStart, isActive } = rangerInstance.handles()[0];

  const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = rangerInstance.getValueForClientX(e.clientX);
    const step = rangerInstance.roundToStep(value);
    handleRef.current?.focus();
    setValues([step]);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        const nextValue = rangerInstance.getNextStep(value, 1);
        setValues([nextValue]);
        break;
      case 'ArrowDown':
        e.preventDefault();
        const prevValue = rangerInstance.getNextStep(value, -1);
        setValues([prevValue]);
        break;
      case 'Home':
        e.preventDefault();
        setValues([rangerInstance.options.min]);
        break;
      case 'End':
        e.preventDefault();
        setValues([rangerInstance.options.max]);
        break;
      default:
        onKeyDownHandler(e);
    }
  };

  return (
    <div className='relative'>
      <div ref={rangerRef} role='slider' aria-valuemin={rangerInstance.options.min} aria-valuemax={rangerInstance.options.max} aria-valuenow={value} onClick={(e) => handleSliderClick(e)} className='relative h-2 cursor-pointer rounded-full bg-neutral-detail-palest' {...others}>
        <div className={`absolute h-full rounded-full bg-controls-highlight ${isActive ? '' : 'transitions-[width]'}`} style={{ width: `${rangerInstance.getPercentageForValue(value)}%` }}></div>
        <Tooltip
          content={value.toString()}
          position='top'
          className='absolute'
          disableHoverListener={true}
          style={{
            left: `${rangerInstance.getPercentageForValue(value)}%`,
            top: '-100%'
          }}
        >
          <button ref={handleRef} onKeyDown={handleOnKeyDown} onMouseDown={onMouseDownHandler} onTouchStart={onTouchStart} className='group absolute top-1/2 -translate-x-1/2 -translate-y-2 p-2 outline-none'>
            <div className={`flex size-6 items-center justify-center rounded-full border border-controls-border bg-neutral-layer-2 group-hover:border-2 group-hover:border-neutral-detail-pale group-focus:border-2 group-focus:border-controls-highlight`}>
              <div className='size-3 rounded-full group-hover:bg-neutral-detail-pale group-focus:bg-controls-highlight'></div>
            </div>
          </button>
        </Tooltip>
      </div>
      <div className='pt-2'>
        {rangerInstance.getTicks().map(({ key, percentage }) => (
          <span key={key} className='absolute h-2 w-0 -translate-x-px border border-neutral-detail-pale' style={{ left: `${percentage}%` }}></span>
        ))}
      </div>
    </div>
  );
}
