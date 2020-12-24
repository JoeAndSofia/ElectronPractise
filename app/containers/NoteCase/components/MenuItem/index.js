import React, { useEffect, useState, memo } from 'react';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';

import {
  MenuItemStyle,
  MenuItemIconStyle
} from './styles';

const MenuItem = props => {
  const {
    icon,
    name,
    desc = '',
    onClick = () => {},
  } = props;
  
  console.log('MenuItem: ', {
    icon,
    name,
    desc,
    onClick
  });
  
  return (
    <MenuItemStyle
      className="menu-item"
      onClick={e => {
        e.stopPropagation();
        onClick();
        console.log('menu.item-click: ', e.target);
      }}
    >
      <MenuItemIconStyle
        icon={icon}
      />
      <FormattedMessage
        id={name}
        description={desc}
        defaultMessage={`No content set for message id: ${name}`}
      />
    </MenuItemStyle>
  );
};

export default compose(
  memo
)(MenuItem);