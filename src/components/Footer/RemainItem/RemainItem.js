import React, { Fragment, memo } from 'react';

const remainItem = (props) => (
  <Fragment>
    <strong>{props.itemLeft}</strong>
    <span>{props.itemLeft > 1 ? ' items' : ' item'}</span>
    <span> left</span>
  </Fragment>
);

export default memo(remainItem);