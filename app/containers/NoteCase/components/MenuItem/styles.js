import styled from 'styled-components';
import { INIT_STATE } from '../../constants';

export const MenuItemStyle = styled.button`
  position: relative;
  flex: 0 0 ${INIT_STATE.MENU_BAR_HEIGHT}px;
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
  
  border-style: none solid none solid;
  border-width: 0.5px;
  outline: 0;
`;

export const MenuItemIconStyle = styled.span`
  flex: 0 0 ${INIT_STATE.MENU_BAR_HEIGHT}px;
  height: ${INIT_STATE.MENU_BAR_HEIGHT}px;
  background-color: transparent;
  background-image: url(${props => props.icon});
  background-size: 60% 60%;
  background-position: 50% 50%;
`;