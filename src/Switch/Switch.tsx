import React, { InputHTMLAttributes } from 'react';

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id?: string;
  checked?: boolean;
  disabled?: boolean;
}

const baseClasses = 'outline-offset-default-transparent before:content[""] peer grid h-7 w-12 cursor-pointer appearance-none place-content-center rounded-full border border-neutral-detail p-px outline outline-2 outline-offset-2 outline-default-transparent transition before:size-5 before:-translate-x-1/2 before:rounded-full before:bg-neutral-detail before:transition';

const checkedClasses = 'checked:border-controls-highlight checked:before:translate-x-1/2 checked:before:bg-controls-highlight hover:outline-neutral-detail-paler checked:hover:outline-controls-highlight-paler focus-visible:outline-controls-border checked:focus-visible:outline-controls-highlight';

const activeClasses = 'active:border-neutral-detail-bold active:bg-neutral-detail-palest active:outline-4 active:outline-offset-0 active:outline-neutral-detail-palest active:before:bg-neutral-detail-bold';

const checkedActiveClasses = 'checked:active:border-controls-highlight-bold checked:active:bg-controls-highlight-palest checked:active:outline-controls-highlight-palest checked:active:before:bg-controls-highlight-bold';

const disabledClasses = 'disabled:cursor-not-allowed disabled:border-neutral-detail-paler disabled:bg-neutral-detail-palest disabled:before:bg-neutral-detail-pale disabled:before:opacity-60';

const checkedDisabledClasses = 'checked:disabled:border-controls-highlight-pale checked:disabled:bg-controls-bg-disabled checked:disabled:before:bg-controls-highlight-pale disabled:hover:outline-0';

export function Switch(props: SwitchProps) {
  const { name, id, checked, disabled = false, ...others } = props;

  return <input type='checkbox' id={id || name} name={name} disabled={disabled} checked={checked} {...others} className={`${baseClasses} ${checkedClasses} ${activeClasses} ${checkedActiveClasses} ${disabledClasses} ${checkedDisabledClasses}`} />;
}
