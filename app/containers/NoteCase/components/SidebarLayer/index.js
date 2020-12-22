import React, { useEffect, useState, memo } from 'react';
import { compose } from 'redux';

const SidebarLayer = props => {
  const {
    width,
    items = []
  } = props;
  
  console.log('SidebarLayer: ', {
    width,
    items
  });
  
  return (
    <div className="sidebar-layer">
      SidebarLayer-Text
    </div>
  );
};

export default compose(
  memo
)(SidebarLayer);