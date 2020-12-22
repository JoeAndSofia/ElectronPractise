import React, { useEffect, useState, memo } from 'react';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';

import {
  MenuItemStyle
} from './styles';

const MenuItem = props => {
  const {
    name,
    desc = '',
    onClick = () => {},
  } = props;
  
  // console.log('MenuItem: ', {
  //   name,
  //   desc,
  //   onClick
  // });
  
  return (
    <MenuItemStyle
      className="menu-item"
      onClick={e => {
        e.stopPropagation();
        onClick();
        console.log('menu.item-click: ', e.target);
      }}
    >
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