import React from 'react';

const footer = (props) => {
  return (       
  <footer className="footer">
    <span className="todo-count">
      <strong>20</strong>
      <span> </span>
      <span>items</span>
      <span> left</span>
    </span>
    <ul className="filters">
      <li>All</li>
      <li>Active</li>
      <li>Completed</li>
    </ul>
    <button className="clear-completed" >Clear completed</button>
  </footer>
  )
};

export default footer;