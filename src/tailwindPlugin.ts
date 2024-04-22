import plugin from 'tailwindcss/plugin';
import ecaTheme from './eca-theme.ts';

export const tailwindPlugin = plugin(({ addUtilities, theme }) => {
  const typographyStyles: any = {
    display: theme('display'),
    heading: theme('heading'),
    label: theme('label'),
    paragraph: theme('paragraph')
  };

  const newUtilities: Record<string, any> = {};

  Object.keys(typographyStyles).forEach((parentKey) => {
    const parentValue = typographyStyles[parentKey];
    const childKeys = Object.keys(parentValue);

    childKeys.forEach((childKey) => {
      newUtilities[`.${parentKey}-${childKey}`] = parentValue[childKey];
    });
  });

  addUtilities(newUtilities);
}, ecaTheme);
