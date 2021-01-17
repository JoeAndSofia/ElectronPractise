/* eslint-disable no-unused-vars */

import React, { useCallback, useEffect, useRef, useState, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import MenuGroup from './components/MenuGroup';
import SidebarLayer from './components/SidebarLayer';

import {
  MENU_CONST,
  MENU_CONFIG
} from './constants';
import {
  NoteCaseStyle,
  NoteCaseUpperStyle,
  NoteCaseLowerStyle,
} from './styles';

const NoteCase = props => {

  console.log('NoteCase: ', props);

  const noteCaseBoard = useRef(null);

  /* draggable segment border */
  const segmentBorder = useRef(null);

  const [initClientX, initOffsetLeft] = [0, 0];
  const [isDragging, setDragging] = useState(false);
  const [clientX, setClientX] = useState(initClientX);
  const [offsetLeft, setOffsetLeft] = useState(initOffsetLeft);

  /* index tree */
  const indexTree = useRef(null);

  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [menuShow, setMenuShow] = useState(MENU_CONST.MENU_OFF);
  const [items, setItems] = useState([]);

  const moveSegment = e => {
    if (noteCaseBoard && isDragging && indexTree) {
      console.log('isDragging', 'setCursorEwResize');
      noteCaseBoard.current.style.cursor = 'ew-resize';
      const nx = e.clientX;
      const nl = nx - (clientX - offsetLeft);
      console.log({
        nx,
        clientX,
        offsetLeft,
        nl
      });
      indexTree.current.style.flexBasis = `${nl}px`;
    }
  };

  return (
    <NoteCaseStyle
      ref={noteCaseBoard}
      onMouseMove={e => {
        moveSegment(e);
      }}
      onMouseUp={e => {
        if (isDragging) {
          setDragging(false);
          noteCaseBoard.current.style.cursor = 'default';
        } else {
          // console.log('isNotDragging', 'setCusorDefault');
          // noteCaseBoard.current.style.cursor = 'default';
        }
      }}
    >
      <NoteCaseUpperStyle>
        <MenuGroup
          intlPrefix="note_case.menu"
          config={MENU_CONFIG}
          menuShow={menuShow}
          setMenuShow={setMenuShow}
        />
      </NoteCaseUpperStyle>
      <NoteCaseLowerStyle>
        <div className="index-tree" ref={indexTree} >
          <SidebarLayer width={sidebarWidth} items={items} />
        </div>
        <div
          id="segmentBorder"
          role="button"
          className="segment-border"
          tabIndex="0"
          ref={segmentBorder}
          onMouseDown={e => {
            const div = segmentBorder.current;
            setClientX(e.clientX);
            // setClientY(e.clientY);
            setOffsetLeft(div.offsetLeft);
            // setOffsetTop(div.offsetTop);
            setDragging(true);
          }}
          onMouseUp={e => {
            if (isDragging) {
              setDragging(false);
              noteCaseBoard.current.style.cursor = 'default';
            }
          }}
        />
        <div className="content-panel" />
      </NoteCaseLowerStyle>
    </NoteCaseStyle>
  );
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
  // onLoadPage: () => dispatch(loadPage()),
  // onLoadIndexTree: () => dispatch(loadIndexTree()),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  memo
)(NoteCase);
