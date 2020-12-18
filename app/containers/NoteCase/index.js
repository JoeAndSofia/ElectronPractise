/* eslint-disable no-unused-vars */

import React, { useEffect, useRef, useState, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  NoteCaseStyle,
  NoteCaseUpperStyle,
  NoteCaseLowerStyle,
} from './styles';

const NoteCase = props => {
  const noteCaseBoard = useRef(null);

  /* draggable segment border */
  const segmentBorder = useRef(null);

  const [initClientX, initOffsetLeft] = [0, 0];
  const [isDragging, setDragging] = useState(false);
  const [clientX, setClientX] = useState(initClientX);
  const [offsetLeft, setOffsetLeft] = useState(initOffsetLeft);

  /* index tree */
  const indexTree = useRef(null);

  const [rootTreeNodes] = useState([]);

  const moveSegment = e => {
    if (isDragging && indexTree) {
      console.log('isDragging', 'setCursorEwResize');
      noteCaseBoard.current.style.cursor = 'ew-resize';
      const nx = e.clientX;
      const nl = nx - (clientX - offsetLeft);
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
      <NoteCaseUpperStyle />
      <NoteCaseLowerStyle>
        <div className="index-tree" ref={indexTree} />
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
