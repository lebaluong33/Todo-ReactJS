import React, {memo} from 'react';

const footer = (props) => {
  console.log(props.listLength);
  return (       
  <footer className="footer">
    <span className="todo-count">
     <strong>20</strong>
      <span>items</span>
      <span> left</span>
    </span>
    <ul className="filters">
      <li><a href="/">All</a></li>
      <li><a href="/">Active</a></li>
      <li><a href="/">Completed</a></li>
    </ul>
    <button className="clear-completed" >Clear completed</button>
  </footer>
  )
};

export default memo(footer);