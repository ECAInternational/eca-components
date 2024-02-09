import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function TabGroup(props) {
  const { children } = props;
  const [selectedTab, setSelectedTab] = useState(children.findIndex((c) => c.props.selected));

  const switchTab = (e, index) => {
    setSelectedTab(index);
    e.preventDefault();
  };

  const handleOnKeyDown = (e) => {
    const currentIndex = children.findIndex((child, index) => index === selectedTab);

    switch (e.key) {
      case 'ArrowLeft':
        switchTab(e, (currentIndex - 1 + children.length) % children.length);
        break;
      case 'ArrowRight':
        switchTab(e, currentIndex + (1 % children.length));
        break;
      case 'Home':
        switchTab(e, 0);
        break;
      case 'End':
        switchTab(e, children.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className='flex gap-4 justify-start' tabIndex='-1'>
      {children.map((child, index) =>
        React.cloneElement(child, {
          key: index,
          selected: index === selectedTab,
          onClick: () => setSelectedTab(child.props.id),
          onKeyDown: (e) => handleOnKeyDown(e)
        })
      )}
    </div>
  );
}

TabGroup.propTypes = {
  children: PropTypes.node.isRequired
};
