
## Menu Component Design Document

The Menu component is a thin wrapper around the `Menu` component, which is a part of the `@headlessui/react` package. The `Menu` component is a fully accessible and unstyled UI component that is designed to integrate beautifully with Tailwind CSS.

The design goal is to:
1. to compile with UX team's design requirements
2. to flexible enough to be used in different scenarios

### Composition

The Menu component is composed of the following components:
- `Menu` - the main component that wraps the `Menu` component
- `Menu.Button` - the button that the user interacts with to open the menu
- `Menu.Items` - the list of items that the user can select from
- `Menu.Item` - an individual item in the list of items


```tsx
   <Menu>
  <MenuButton>Menu</MenuButton>
  <MenuItems>
    <MenuItem><a>Link to a page</a></MenuItem>
    <MenuItem disabled><a>Disabled Item</a></MenuItem>
    <MenuItem>Another menu Item</MenuItem>
  </MenuItems>
</Menu>
```