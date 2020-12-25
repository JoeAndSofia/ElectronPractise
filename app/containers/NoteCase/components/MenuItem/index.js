import React, { useEffect, useState, memo } from 'react';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';

import {
  MENU_CONST
} from '../../constants';

import {
  MenuItemStyle,
  MenuItemIconStyle,
  MenuItemShortcutTextStyle
} from './styles';

const MenuItem = props => {
  const {
    icon,
    name,
    desc = '',
    onClick = () => {},
    shortcut = [],
    first,
    last
  } = props;
  
  console.log('MenuItem: ', {
    icon,
    name,
    desc,
    onClick,
    shortcut,
    first,
    last
  });
  
  return (
    <MenuItemStyle
      className="menu-item"
      onClick={e => {
        e.stopPropagation();
        onClick();
        console.log('menu.item-click: ', e.target);
      }}
      borderStyles={[
        first ? MENU_CONST.MENU_ITEM.BORDER_STYLE.TOP : MENU_CONST.MENU_ITEM.BORDER_STYLE.NONE,
        MENU_CONST.MENU_ITEM.BORDER_STYLE.SIDE,
        last ? MENU_CONST.MENU_ITEM.BORDER_STYLE.BOTTOM : MENU_CONST.MENU_ITEM.BORDER_STYLE.NONE,
        MENU_CONST.MENU_ITEM.BORDER_STYLE.SIDE
      ]}
    >
      <MenuItemIconStyle
        icon={icon}
      />
      <FormattedMessage
        id={name}
        description={desc}
        defaultMessage={`No content set for message id: ${name}`}
      />
      <MenuItemShortcutTextStyle>
        {
          // todo
        }
      </MenuItemShortcutTextStyle>
    </MenuItemStyle>
  );
};

export default compose(
  memo
)(MenuItem);