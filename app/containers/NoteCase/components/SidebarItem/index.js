import React, { useEffect, useState, memo } from 'react';
import { compose } from 'redux';

const SidebarItem = props => {
  return (
    <div>
      SidebarItem - Text
    </div>
  );
};

export default compose(
  memo
)(SidebarItem);