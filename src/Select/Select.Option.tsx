import { Listbox } from '@headlessui/react';
import React, { ComponentPropsWithRef, createContext, PropsWithChildren } from 'react';
import { useSelectContext } from './Select.tsx';
import { Checkbox } from '../Checkbox/Checkbox.tsx';

export interface SelectOptionProps extends Omit<ComponentPropsWithRef<typeof Listbox.Option>, 'children'> {}

export function SelectOption({ className, children, ...props }: PropsWithChildren<SelectOptionProps>) {
  const { multiple, value } = useSelectContext();

  const padding = multiple ? 'p-1 pe-3' : 'py-2 px-3';
  return (
    <Listbox.Option
      className={`relative cursor-pointer select-none ${padding} text-neutral-body paragraph-sm-lighter
      ui-disabled:cursor-not-allowed
      ui-disabled:bg-neutral-layer-1
      ui-disabled:text-controls-content-disabled active:ui-not-disabled:bg-controls-highlight-pale ui-checked:ui-not-disabled:bg-controls-highlight-pale
      ui-selected:ui-not-disabled:bg-controls-highlight-palest
      active:ui-selected:ui-not-disabled:bg-controls-highlight-pale 
      active:ui-selected:ui-not-disabled:bg-controls-highlight-palest ui-active:ui-not-disabled:bg-controls-highlight-paler  active:ui-active:ui-not-disabled:bg-controls-highlight-pale ${className}`}
      {...props}
    >
      {(renderProps) => (
        <SelectOptionContext.Provider value={renderProps}>
          <div className='flex items-center gap-2.5'>
            {multiple && (
              <span className='p-1'>
                <Checkbox name='selected' checked={Array.isArray(value) && value.includes(props.value)} disabled={props.disabled} />
              </span>
            )}
            {children}{' '}
          </div>
        </SelectOptionContext.Provider>
      )}
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
