import styled from 'styled-components';
import { INIT_STATE } from '../../constants';

export const MenuItemStyle = styled.button`
  :hover {
    background-color:lightblue;
  }
  
  position: relative;
  flex: 0 0 ${INIT_STATE.MENU_BAR_HEIGHT}px;
  
  span {
    user-select: none;
  }
  
  border-bottom: ;
  outline: 0;
`;