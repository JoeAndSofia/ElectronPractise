import styled from 'styled-components';
import { INIT_STATE, MENU_CONST } from '../../constants';

export const MenuItemStyle = styled.button`
  position: relative;
  flex: 0 0 ${MENU_CONST.MENU_BAR.HEIGHT}px;
  padding: 0;
  
  
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  :hover {
    background-color:lightblue;
  }
  
  > span {
    user-select: none;
  }
  
  border-style: ${props => props.borderStyles ? props.borderStyles.join(' ') : 'none solid none solid'};
  border-width: 0.5px;
  outline: 0;
`;

export const MenuItemIconStyle = styled.span`
  flex: 0 0 ${MENU_CONST.MENU_BAR.HEIGHT}px;
  height: ${MENU_CONST.MENU_BAR.HEIGHT}px;
  background-color: transparent;
  background-image: url(${props => props.icon});
  background-size: 60% 60%;
  background-position: 50% 50%;
`;

export const MenuItemShortcutTextStyle = styled.span`
  flex: 0 0 auto;
  height: ${MENU_CONST.MENU_BAR.HEIGHT}px;
`;