import React, {memo} from 'react';

const footer = (props) => {
  return (       
  <footer className="footer">
    {props.todoListLength > 0 ? <span className="todo-count">
     <strong>{props.itemLeft}</strong>
      <span>{props.itemLeft > 1 ? ' items' : ' item'}</span>
      <span> left</span>
    </span> : null }
    <ul className="filters">
      <li>
        <a
        className={`${props.category === 'ALL' ? "selected" : ''}`}
        onClick={() => props.setCategory('ALL')}
        href="#/all" >All</a>
      </li>
      <li>
        <a
          className={`${props.category === 'ACTIVE' ? "selected" : ''}`}
          onClick={() => props.setCategory('ACTIVE')} 
          href="#/active" >Active</a>
      </li>
      <li>
        <a 
          className={`${props.category === 'COMPLETED' ? "selected" : ''}`}
          onClick={() => props.setCategory('COMPLETED')}
          href="#/completed" >Completed</a>
      </li>
    </ul>
    <button className="clear-completed" onClick={props.clearCompleted} >Clear completed</button>
  </footer>
  )
};

export default memo(footer);