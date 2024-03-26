import React, { Children, HTMLAttributes, PropsWithChildren, cloneElement, isValidElement } from 'react';
import { StepProps } from '.';

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {}

export function Stepper(props: PropsWithChildren<StepperProps>) {
  const { children } = props;

  return (
    <div>
      {Children.map(children, (child, index) => {
        const isElement = isValidElement<StepProps>(child);
        if (isElement) {
          return cloneElement<StepProps>(child, { index: index + 1 });
        }
        return null;
      })}
    </div>
  );
}
