import React, { ComponentProps, createContext } from 'react';
import { Combobox } from '@headlessui/react';

export interface AutoCompleteProps extends Omit<ComponentProps<typeof Combobox>, 'multiple' | 'children'> {
  multiple?: boolean;
  children: React.ReactNode;
}

export function AutoComplete({ multiple, children, ...rest }: AutoCompleteProps) {
  return (
    <Combobox {...rest} multiple={!!multiple as any}>
      {(props) => <AutoCompleteContext.Provider value={props}>{children}</AutoCompleteContext.Provider>}
    </Combobox>
  );
}

type ComboboxRenderPropArg<TValue, TActive = TValue> = {
  open: boolean;
  disabled: boolean;
  activeIndex: number | null;
  activeOption: TActive | null;
  value: TValue;
};

export const AutoCompleteContext = createContext<ComboboxRenderPropArg<unknown, unknown>>(null as unknown as ComboboxRenderPropArg<unknown, unknown>);

export function useAutoCompleteContext() {
  const context = React.useContext(AutoCompleteContext);
  if (!context) {
    throw new Error('ComboBox compound components cannot be rendered outside the ComboBox component');
  }
  return context;
}
