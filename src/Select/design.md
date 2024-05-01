
## Select Component Design Document

The Select component is a thin wrapper around the `Listbox` component, which is a part of the `@headlessui/react` package. The `Listbox` component is a fully accessible and unstyled UI component that is designed to integrate beautifully with Tailwind CSS.

### Composition

The Select component is composed of the following components:
- `Select` - the main component that wraps the `Listbox` component
- `SelectButton` - the button that the user interacts with to open and close the select
- `SelectOptions` - the list of options that the user can select from
- `SelectOption` - an individual option in the list of opions
- `SelectOptionGroup` - a grouping of options with a heading label

```tsx
<FieldSet disabled={disabled}>
  <Select name={name} value={selectedPerson} onChange={setSelectedPerson}>
    <Label>
      {label} <span className="font-light ps-1">Description</span>
    </Label>
    <SelectButton state={state}>{selectedPerson.name}</SelectButton>
    <SelectOptions>
      {people.map((person) => (
        <SelectOption key={person.id} value={person} disabled={person.unavailable}>
          {person.name}
        </SelectOption>
      ))}
    </SelectOptions>
  </Select>
</FieldSet>;
```

### Context Providers

The `Listbox` uses render props to provide the necessary context to its children. At compose time, it is not too bad to use render props. 

However, when we want to customize the `Listbox` component with our own wrapper component `Select`, it is hard to use the render props.

Therefore, we created two context providers: `SelectContextProvider` and `SelectOptionContextProvider`.

`SelectContextProvider` provides the states for its children, for example, the `SelectButton` component can get the `open` state from the context without using render props.

`SelectOptionContextProvider` provides the `active` and `selected` states for its children. The pre-styled option viewer components can get the `active` and `selected` states from the context without using render props. When consumer develop their own option viewer components, they can use the `useSelectOptionContext` hook to get the states.