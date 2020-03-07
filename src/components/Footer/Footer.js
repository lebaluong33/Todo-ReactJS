import React, { memo } from 'react';
import CompletedButton from '../UI/CompletedButton/CompletedButton';
import RemainItem from './RemainItem/RemainItem';
import Category from './Category/Category';

const footer = (props) => {
  console.log(props.listLength);
  return (       
  <footer className="footer">
    <span className="todo-count">
      <RemainItem />
    </span>
    <ul className="filters">
     <Category />
    </ul>
    <CompletedButton />
  </footer>
  )
};

export default memo(footer);