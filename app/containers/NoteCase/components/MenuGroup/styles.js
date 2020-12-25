import styled from 'styled-components';
import { INIT_STATE, MENU_CONST } from '../../constants';

export const MenuGroupStyle = styled.div`
  position: relative;
  
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  
  outline: 0;
`;

export const MenuTitleStyle = styled.div`
  position: relative;
  text-align: center;
  
  flex: 0 0 ${props => props.width}px;

  :hover {
    background-color:lightblue;
  }
  
  display: flex;
  > span {
    flex: 0 0 ${MENU_CONST.MENU_BAR.WIDTH}px;
    user-select: none;
  }
  
  z-index: 2;
  
  outline: 0;
`;

export const MenuItemsStyle = styled.div`
  user-select: none;
  
  position: absolute;
  width: ${MENU_CONST.MENU_ITEM.WIDTH}px;
  
  left: 0;
  top: ${MENU_CONST.MENU_BAR.HEIGHT}px;
  z-index: 2;
  
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  align-items: stretch;
  
  background-color: lightgray;
`;

export const MenuClickLayerStyle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  
  width: 100vw;
  height: 100vh;
  
  opacity: 50%;
`;