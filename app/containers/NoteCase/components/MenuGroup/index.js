import React, { Fragment, useEffect, useRef, useState, memo } from 'react';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';

import {
  INIT_STATE,
  MENU_CONST
} from '../../constants';

import {
  MenuGroupStyle,
  MenuTitleStyle,
  MenuItemsStyle,
  MenuClickLayerStyle
} from './styles';

import MenuItem from '../MenuItem';

const MenuGroup = props => {
  const {
    intlPrefix,
    config = [],
    
    menuShow,
    setMenuShow
  } = props;
  
  // console.log('MenuGroup: ', {
  //   name,
  //   desc,
  //   onClick,
  //   items
  // });
  
  return (
    <MenuGroupStyle
      className="menu-group"
      tabIndex="0"
    >
      {
        config.map((c, i) => {
          const {
            name,
            onClick = () => {},
            shortcut = '',
            desc = '',
            items = []
          } = c;
          
          const intlId = `${intlPrefix}.${name}`;
          return <Fragment key={intlId}>
            <MenuTitleStyle
              width={INIT_STATE.MENU_BAR_WIDTH}
              className="menu-title"
              tabIndex="0"
              onClick={() => {
                if (menuShow !== MENU_CONST.MENU_OFF) {
                  setMenuShow(MENU_CONST.MENU_OFF);
                } else {
                  setMenuShow(i);
                }
              }}
              onMouseMove={() => {
              
              }}
            >
              <FormattedMessage
                id={intlId}
                description={desc}
                defaultMessage={`No content set for message id: ${name}`}
              />
            </MenuTitleStyle>
            
            <MenuItemsStyle
              className={`menu-items ${menuShow === i ? 'visible-show' : 'visible-hide'}`}
            >
              {
                items.map(e => {
                  const itemIntlId = `${intlId}.${e.name}`;
                  return <MenuItem
                    name={itemIntlId}
                    key={itemIntlId}
                    onClick={() => {
                      e.onClick();
                      setMenuShow(false);
                    }}
                  />
                })
              }
            </MenuItemsStyle>
          </Fragment>
        })
      }
      
      <MenuClickLayerStyle
        className={`${menuShow !== MENU_CONST.MENU_OFF ? 'visible-show' : 'visible-hide'}`}
        tabIndex="0"
        onClick={e => {
          console.log('menu-click-layer click');
          setMenuShow(MENU_CONST.MENU_OFF);
        }}
      />
    
    </MenuGroupStyle>
  );
};

export default compose(
  memo
)(MenuGroup);