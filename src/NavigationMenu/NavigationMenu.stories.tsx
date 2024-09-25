import { NavigationMenu } from './NavigationMenu.tsx';

export default {
  component: NavigationMenu,
  title: 'Components/NavigationMenu',
  argTypes: {},
  args: {}
};

export const DefaultMenuConfig = {
  argTypes: {
    url: {
      control: 'select',
      description: 'Defines the current application url path',
      options: ['/scenarios', '/dashboard', 'https://localhost:123/scenarios', 'https://localhost:123/dashboard']
    }
  },
  args: {
    url: '/scenarios',
    menuItems: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        link: '/dashboard',
        icon: 'fi-rr-bullseye-arrow',
        enabled: true
      },
      {
        id: 'my-work',
        label: 'My Work',
        link: '/my-work',
        icon: 'fi-rr-completed',
        enabled: false
      },
      {
        id: 'moves',
        label: 'Moves',
        icon: 'fi-rr-track',
        enabled: true,
        subItems: [
          {
            id: 'cases',
            label: 'Cases',
            link: 'http://localhost:123/cases',
            enabled: false
          },
          {
            id: 'scenarios',
            label: 'Scenarios',
            link: '/scenarios',
            enabled: true
          }
        ]
      }
    ]
  }
};
