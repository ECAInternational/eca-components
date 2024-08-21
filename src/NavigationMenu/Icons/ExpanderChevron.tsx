import React, { memo } from 'react';

export const ExpanderChevron = memo(({ isListExpanded }: { isListExpanded?: boolean }) => <i data-testid='chevron' className={`fi fi-sr-angle-small-${isListExpanded ? 'up' : 'down'} leading-3.5 block size-3.5 text-sm text-neutral-detail-paler`} />);
