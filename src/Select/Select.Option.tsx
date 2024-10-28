import { ListboxOption } from '@headlessui/react';
import React, { ComponentPropsWithRef, createContext, PropsWithChildren } from 'react';
import { useSelectContext } from './Select.tsx';
import { Checkbox } from '../Checkbox/Checkbox.tsx';

export interface SelectOptionProps extends Omit<ComponentPropsWithRef<typeof ListboxOption>, 'children'> {}

export function SelectOption({ className, children, ...props }: PropsWithChildren<SelectOptionProps>) {
  const { multiple, value } = useSelectContext();

  const padding = multiple ? 'p-1 pe-3' : 'py-2 px-3';
  return (
    <ListboxOption onClick={() => console.log('eca-comp: listbox [clicked]')} className={`cursor-pointer select-none ${padding} text-neutral-body paragraph-sm-lighter active:bg-controls-highlight-pale data-[disabled]:cursor-not-allowed data-[active]:bg-controls-highlight-paler data-[checked]:bg-controls-highlight-pale data-[disabled]:bg-neutral-layer-1 data-[selected]:bg-controls-highlight-palest data-[disabled]:text-controls-content-disabled active:data-[selected]:bg-controls-highlight-palest ${className}`} {...props}>
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
    </ListboxOption>
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
