import { Combobox } from '@headlessui/react';
import React, { ComponentPropsWithRef, createContext, PropsWithChildren } from 'react';

export interface AutoCompleteOptionProps extends Omit<ComponentPropsWithRef<typeof Combobox.Option>, 'children'> {}

export function AutoCompleteOption({ className, children, ...props }: PropsWithChildren<AutoCompleteOptionProps>) {
  return (
    <Combobox.Option className={`relative cursor-default select-none p-3 paragraph-sm-lighter ui-checked:ui-not-disabled:bg-controls-highlight-pale ui-selected:ui-not-disabled:bg-controls-highlight-palest ui-active:ui-not-disabled:bg-controls-highlight-paler ${className}`} {...props}>
      {(renderProps) => <AutoCompleteOptionContext.Provider value={renderProps}>{children}</AutoCompleteOptionContext.Provider>}
    </Combobox.Option>
  );
}

type OptionRenderPropArg = {
  selected: boolean;
  disabled: boolean;
  active: boolean;
};

export const AutoCompleteOptionContext = createContext<OptionRenderPropArg>(null as unknown as OptionRenderPropArg);

export function useAutoCompleteOptionContext() {
  const context = React.useContext(AutoCompleteOptionContext);
  if (!context) {
    throw new Error('ComboBox compound components cannot be rendered outside the ComboBox component');
  }
  return context;
}
