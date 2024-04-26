import { Listbox } from '@headlessui/react';
import React, { ComponentPropsWithRef, createContext, PropsWithChildren } from 'react';

export interface SelectOptionProps extends Omit<ComponentPropsWithRef<typeof Listbox.Option>, 'children'> {}

export function SelectOption({ className, children, ...props }: PropsWithChildren<SelectOptionProps>) {
  return (
    <Listbox.Option
      className={`relative cursor-pointer select-none p-3 paragraph-sm-lighter
      ui-disabled:pointer-events-none
      ui-disabled:bg-neutral-layer-1 ui-disabled:text-controls-content-disabled ui-checked:ui-not-disabled:bg-controls-highlight-pale
      ui-selected:ui-not-disabled:bg-controls-highlight-palest
      ui-active:ui-not-disabled:bg-controls-highlight-paler ${className}`}
      {...props}
    >
      {(renderProps) => <SelectOptionContext.Provider value={renderProps}>{children}</SelectOptionContext.Provider>}
    </Listbox.Option>
  );
}

type OptionRenderPropArg = {
  selected: boolean;
  disabled: boolean;
  active: boolean;
};

export const SelectOptionContext = createContext<OptionRenderPropArg>(null as unknown as OptionRenderPropArg);

export function useSelectOptionContext() {
  const context = React.useContext(SelectOptionContext);
  if (!context) {
    throw new Error('Listbox option component cannot be rendered outside the Listbox options component');
  }
  return context;
}
