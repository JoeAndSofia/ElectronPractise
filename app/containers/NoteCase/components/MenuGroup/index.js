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
  
  console.log('MenuGroup: ', props);
  
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
            shortcut = [],
            desc = '',
            items = []
          } = c;
          
          const intlId = `${intlPrefix}.${name}`;
          return <Fragment key={intlId}>
            <MenuTitleStyle
              width={MENU_CONST.MENU_BAR.WIDTH}
              className="menu-title"
              tabIndex="0"
              onClick={() => {
                if (menuShow !== MENU_CONST.MENU_OFF) {
                  setMenuShow(MENU_CONST.MENU_OFF);
                } else {
                  setMenuShow(i);
                }
              }}
              onKeyDown={e => {
                console.log('onKeyDown: ', e);
              }}
              onMouseMove={() => {
                if (menuShow !== MENU_CONST.MENU_OFF && menuShow !== i) {
                  setMenuShow(i);
                }
              }}
            >
              <FormattedMessage
                id={intlId}
                description={desc}
                defaultMessage={`No content set for message id: ${intlId}`}
              />
              {
                menuShow === i && (
                  <MenuItemsStyle>
                    {
                      items.map(f => {
                        const itemIntlId = `${intlId}.${f.name}`;
                        return <MenuItem
                          icon={f.icon}
                          name={itemIntlId}
                          desc={f.desc}
                          key={itemIntlId}
                          onClick={() => {
                            f.onClick();
                            setMenuShow(MENU_CONST.MENU_OFF);
                          }}
                          shortcut={f.shortcut}
                          first={f.first}
                          last={f.last}
                        />
                      })
                    }
                  </MenuItemsStyle>
                )
              }
            </MenuTitleStyle>
            
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