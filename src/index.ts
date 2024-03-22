import plugin from 'tailwindcss/plugin';
import theme from './theme.ts';
import { Button } from './Button/Button.tsx';
import { Checkbox } from './Checkbox/Checkbox.tsx';
import { IconButton } from './IconButton/IconButton.tsx';
import { Radio } from './Radio/Radio.tsx';
import { Switch } from './Switch/Switch.tsx';
import { Tab } from './Tab/Tab.tsx';
import { TextArea } from './TextArea/TextArea.tsx';
import { TextInput } from './TextInput/TextInput.tsx';
import { Chip } from './Chip/Chip.tsx';
import { Tooltip } from './Tooltip/Tooltip.tsx';
import { SegmentedControl } from './SegmentedControl/SegmentedControl.tsx';

import { Card, CardBody, CardFooter, CardHeader } from './Card/index.ts';

export { Card, CardBody, CardFooter, CardHeader };
export { Button };
export { Checkbox };
export { IconButton };
export { Radio };
export { Switch };
export { Tab };
export { TextArea };
export { TextInput };
export { Chip };
export { Tooltip };
export { SegmentedControl };

// Export the tailwind plugin
export default plugin(() => {}, theme);
