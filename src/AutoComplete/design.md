
## AutoComplete Component Design Document

The AutoComplete component is a thin wrapper around the `ComboBox` component, which is a part of the `@headlessui/react` package. The `ComboBox` component is a fully accessible and unstyled UI component that is designed to integrate beautifully with Tailwind CSS.

The design goal is to:
1. to compile with UX team's design requirements
2. to flexible enough to be used in different scenarios

### Composition

The AutoComplete component is composed of the following components:
- `AutoComplete` - the main component that wraps the `ComboBox` component
- `AutoCompleteInput` - the input field that the user interacts with to search for items
- `AutoCompleteOptions` - the list of options that the user can select from
- `AutoCompleteOption` - an individual option in the list of options
- a collection of pre-styled option viewer components, for example: `DefaultOptionViewer`, `IconOptionViewer`, `ImageOptionViewer`, `TableOptionViewer`
- `HighlightMatched` - a utility component that highlights the matched text in the options

Consumers can use the pre-styled option viewer components directly, or develop their own option viewer components.

```tsx
<FieldSet disabled={disabled}>
  <AutoComplete name={name} value={selectedPerson} onChange={setSelectedPerson}>
    <Label>
      {label} <span className="font-light ps-1">Description</span>
    </Label>
    <AutoCompleteInput state={state} onChange={(event) => setQuery(event.target.value)} />
    <AutoCompleteOptions onClose={() => setQuery('')}>
      {filteredPeople.map((person) => (
        <AutoCompleteOption key={person} value={person}>
          <DefaultOptionViewer>
            <HighlightMatched content={person} query={query} />
          </DefaultOptionViewer>
        </AutoCompleteOption>
      ))}
    </AutoCompleteOptions>
  </AutoComplete>
</FieldSet>;
```

### Context Providers

The `ComboBox` uses render props to provide the necessary context to its children. At compose time, it is not too bad to use render props. 

However, when we want to customize the `ComboBox` component with our own wrapper component `AutoComplete`, it is hard to use the render props.

Therefore, we created two context providers: `AutoCompleteContextProvider` and `AutoCompleteOptionContextProvider`.

`AutoCompleteContextProvider` provides the states for its children, for example, the `AutoCompleteInput` component can get the `open` state from the context without using render props.

`AutoCompleteOptionContextProvider` provides the `active` and `selected` states for its children. The pre-styled option viewer components can get the `active` and `selected` states from the context without using render props. When consumer develop their own option viewer components, they can use the `useAutoCompleteOptionContext` hook to get the states.