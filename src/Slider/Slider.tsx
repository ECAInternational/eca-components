import React, { InputHTMLAttributes } from 'react';

export interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id?: string;
}

export function Slider(props: SliderProps) {
  const { name, id, className, ...others } = props;

  return (
    <>
      <input type='range' className={` ${className}`} {...others}></input>
    </>
  );
}
