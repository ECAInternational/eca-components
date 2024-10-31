import React, { ComponentProps, createContext, useMemo } from 'react';
import { Combobox } from '@headlessui/react';

export interface AutoCompleteProps extends Omit<ComponentProps<typeof Combobox>, 'multiple' | 'children' | 'defaultValue'> {
  multiple?: boolean;
  itemKey?: (a: unknown) => string;
  children: React.ReactNode;
}

export function AutoComplete({ multiple, itemKey, children, onChange, value, ...rest }: AutoCompleteProps) {
  return (
    <Combobox immediate multiple={!!multiple as any} value={value} onChange={onChange} {...rest}>
      {(props) => {
        const contextValue = useMemo(() => ({ ...props, multiple, onChange, itemKey }), [props, multiple, onChange]);
        return <AutoCompleteContext.Provider value={contextValue}>{children}</AutoCompleteContext.Provider>;
      }}
    </Combobox>
  );
}

type ComboboxRenderPropArg<TValue, TActive = TValue> = {
  open: boolean;
  disabled: boolean;
  activeIndex: number | null;
  activeOption: TActive | null;
  value: TValue;
  onChange: any;
  itemKey?: (a: unknown) => string;
  multiple?: boolean;
};

export const AutoCompleteContext = createContext<ComboboxRenderPropArg<unknown, unknown>>(null as unknown as ComboboxRenderPropArg<unknown, unknown>);

export function useAutoCompleteContext() {
  const context = React.useContext(AutoCompleteContext);
  if (!context) {
    throw new Error('ComboBox compound components cannot be rendered outside the ComboBox component');
  }
  return context;
}
