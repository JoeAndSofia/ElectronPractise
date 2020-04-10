import styled from 'styled-components';
import { INIT_STATE } from './constants';

export const NoteCaseStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  align-items: stretch;

  height: 100%;
`;

export const NoteCaseUpperStyle = styled.div`
  flex: 0 0 25px;
`;

export const NoteCaseLowerStyle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;

  flex: 1 0 auto;
  width: calc(100% - 2px);
  border: 4px groove lightgray;
  box-sizing: border-box;
  div {
    margin: 0px;
  }
  .index-tree {
    flex: 0 0 ${INIT_STATE.INDEX_TREE_WIDTH}px;
    box-sizing: border-box;
  }
  .segment-border {
    flex: 0 0 10px;
    border: 2px groove lightgray;
    box-sizing: border-box;
    outline: none;
  }
  .content-panel {
    flex: 1 0 auto;
    box-sizing: border-box;
  }
`;
