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
import { tailwindPlugin } from './tailwindPlugin.ts';
import { AutoComplete, AutoCompleteInput, AutoCompleteLabel, AutoCompleteOption, AutoCompleteOptions } from './AutoComplete/index.ts';

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
export { AutoComplete, AutoCompleteLabel, AutoCompleteOptions, AutoCompleteOption, AutoCompleteInput };

// Export the tailwind plugin
export default tailwindPlugin;
