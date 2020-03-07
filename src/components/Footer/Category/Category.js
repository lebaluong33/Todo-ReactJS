import React, { memo } from 'react';
const category = (props) => (
  <li>
  <a
    className={`${props.category === props.name.toUpperCase() ? "selected" : ''}`}
    onClick={() => props.setCategory( props.name.toUpperCase())}
    href={"#/" + props.name.toLowerCase()} >{props.name}</a>
  </li>
);

export default memo(category);