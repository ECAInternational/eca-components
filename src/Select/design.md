
## Select Component Design Document

The Select component is a thin wrapper around the `Listbox` component, which is a part of the `@headlessui/react` package. The `Listbox` component is a fully accessible and unstyled UI component that is designed to integrate beautifully with Tailwind CSS.

The design goal is to:
1. to compile with UX team's design requirements
2. to flexible enough to be used in different scenarios

### Composition

The Select component is composed of the following components:
- `Select` - the main component that wraps the `Listbox` component
- `SelectButton` - the input field that the user interacts with to search for items
- `SelectOptions` - the list of options that the user can select from
- `SelectOption` - an individual option in the list of options
- a collection of pre-styled option viewer components, for example: `DefaultOptionViewer`, `IconOptionViewer`, `ImageOptionViewer`, `TableOptionViewer`
- `HighlightMatched` - a utility component that highlights the matched text in the options

Consumers can use the pre-styled option viewer components directly, or develop their own option viewer components.

```tsx
<FieldSet disabled={disabled}>
  <Select name={name} value={selectedPerson} onChange={setSelectedPerson}>
    <Label>
      {label} <span className="font-light ps-1">Description</span>
    </Label>
    <SelectButton state={state} onChange={(event) => setQuery(event.target.value)} />
    <SelectOptions onClose={() => setQuery('')}>
      {filteredPeople.map((person) => (
        <SelectOption key={person} value={person}>
          <DefaultOptionViewer>
            <HighlightMatched content={person} query={query} />
          </DefaultOptionViewer>
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