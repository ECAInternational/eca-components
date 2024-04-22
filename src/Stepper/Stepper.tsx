import React, { Children, HTMLAttributes, PropsWithChildren, cloneElement, isValidElement } from 'react';
import { StepLabelPosition, StepProps } from './Step.tsx';

export type StepperLayout = 'horizontal' | 'vertical';

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  layout: StepperLayout;
}

export function Stepper(props: PropsWithChildren<StepperProps>) {
  const { children, layout = 'horizontal' } = props;

  const stepprLayout: Record<StepperLayout, string> = {
    horizontal: 'flex w-full justify-between',
    vertical: 'inline-flex flex-col justify-between items-end'
  };

  const labelPosition: Record<StepperLayout, StepLabelPosition> = {
    horizontal: 'below',
    vertical: 'left'
  };

  const stepDivider: Record<StepperLayout, string> = {
    horizontal: 'w-full h-0 translate-y-3.5 border-t',
    vertical: 'h-full min-h-4 w-0 -translate-x-3.5 border-l'
  };

  return (
    <div className={`${stepprLayout[layout]}`}>
      {Children.map(children, (child, index) => {
        const isElement = isValidElement<StepProps>(child);
        if (isElement) {
          const clonedElement = cloneElement<StepProps>(child, { index: index + 1, labelPosition: labelPosition[layout] });
          return index === Children.count(children) - 1 ? (
            clonedElement
          ) : (
            <>
              {clonedElement} <div className={`border-controls-border ${stepDivider[layout]}`} />
            </>
          );
        }
        return null;
      })}
    </div>
  );
}
