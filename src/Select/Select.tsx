import React, { ComponentProps, createContext } from 'react';
import { Listbox } from '@headlessui/react';

export interface SelectProps extends Omit<ComponentProps<typeof Listbox>, 'children'> {
  multiple?: boolean;
  children: React.ReactNode;
}

export function Select({ multiple, children, ...rest }: SelectProps) {
  return (
    <Listbox {...rest} multiple={!!multiple as any}>
      {(props) => {
        const contextValue = React.useMemo(() => ({ ...props, multiple }), [props, multiple]);
        return <SelectContext.Provider value={contextValue}>{children}</SelectContext.Provider>;
      }}
    </Listbox>
  );
}

type ListboxRenderPropArg<TValue> = {
  open: boolean;
  disabled: boolean;
  value: TValue;
  multiple?: boolean;
};

export const SelectContext = createContext<ListboxRenderPropArg<unknown>>(null as unknown as ListboxRenderPropArg<unknown>);

export function useSelectContext() {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error('Listbox compound components cannot be rendered outside the Listbox component');
  }
  return context;
}
