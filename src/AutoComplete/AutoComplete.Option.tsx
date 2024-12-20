import { ComboboxOption } from '@headlessui/react';
import React, { ComponentPropsWithRef, createContext, PropsWithChildren } from 'react';

export interface AutoCompleteOptionProps extends Omit<ComponentPropsWithRef<typeof ComboboxOption>, 'children'> {}

export function AutoCompleteOption({ className, children, ...props }: PropsWithChildren<AutoCompleteOptionProps>) {
  return (
    <ComboboxOption className={`cursor-pointer select-none p-2 paragraph-sm-lighter data-[disabled]:cursor-not-allowed data-[active]:bg-controls-highlight-paler data-[checked]:bg-controls-highlight-pale data-[disabled]:bg-neutral-layer-1 data-[selected]:bg-controls-highlight-palest data-[disabled]:text-controls-content-disabled ${className}`} {...props} disabled={props.disabled}>
      {(renderProps) => <AutoCompleteOptionContext.Provider value={renderProps}>{children}</AutoCompleteOptionContext.Provider>}
    </ComboboxOption>
  );
}

type OptionRenderPropArg = {
  selected: boolean;
  disabled: boolean;
  active: boolean;
};

export const AutoCompleteOptionContext = createContext<OptionRenderPropArg>(null as unknown as OptionRenderPropArg);
