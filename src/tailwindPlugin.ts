import plugin from 'tailwindcss/plugin';
import ecaTheme from './eca-theme.ts';

export const tailwindPlugin = plugin(({ addUtilities, theme }) => {
  const typographyStyles = {
    display: theme('display'),
    heading: theme('heading'),
    label: theme('label'),
    paragraph: theme('paragraph')
  };

  const newUtilities: Record<string, any> = Object.entries(typographyStyles).reduce(
    (acc, [parentKey, parentValue]) => ({
      ...acc,
      ...Object.entries(parentValue as Record<string, any>).reduce(
        (acc2, [childKey, childValue]) => ({
          ...acc2,
          [`.${parentKey}-${childKey}`]: childValue
        }),
        {}
      )
    }),
    {}
  );

  addUtilities(newUtilities);
}, ecaTheme);
