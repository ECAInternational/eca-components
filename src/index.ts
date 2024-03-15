import plugin from 'tailwindcss/plugin';
import theme from './theme.ts';

export * from './Button/Button.tsx';
export * from './Checkbox/Checkbox.tsx';
export * from './IconButton/IconButton.tsx';
export * from './Radio/Radio.tsx';
export * from './Switch/Switch.tsx';
export * from './Tab/Tab.tsx';
export * from './TextArea/TextArea.tsx';
export * from './TextInput/TextInput.tsx';
export * from './Chip/Chip.tsx';
export * from './Tooltip/Tooltip.tsx';

// Export the tailwind plugin
export default plugin(() => {}, theme);
