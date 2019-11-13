import React, { useEffect, useRef, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { NoteCaseStyle, NoteCaseUpperStyle, NoteCaseLowerStyle } from './styles';

const NoteCase = props => {
  const border = useRef(null);
  
  
  
  return (
		<NoteCaseStyle>
			<NoteCaseUpperStyle>
			
			</NoteCaseUpperStyle>
			<NoteCaseLowerStyle>
				<div className="index-tree">
				
				</div>
				<div
					className="border"
					tabIndex="0"
					ref={border}
				/>
				<div className="content-panel">
				
				</div>
			</NoteCaseLowerStyle>
		</NoteCaseStyle>
  );
}

const mapStateToProps = createStructuredSelector({

})

const mapDispatchToProps = dispatch => ({
	onLoadPage: () => dispatch(loadPage()),
	onLoadIndexTree: () => dispatch(loadIndexTree()),
})

export default NoteCase;
