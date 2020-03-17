import React, { Fragment } from 'react';

import TodoItem from './TodoItem/TodoItem';

const todoList = (props) => {
  return (
    <section className="main">
      { props.todoListLength ? 
      <Fragment>
        <input
          onChange={props.selectedAllHandler}
          checked={props.isSelectedAll}
          className="toggle-all"
          type="checkbox" />
        <label
          onClick={props.selectedAllHandler}
          htmlFor="toggle-all" ></label>
        </Fragment>
         : null}
      <ul className="todo-list">
        {props.todos.map((item, index) =>(
          <TodoItem
            {...props}
            index={index}
            key={item.id}
            todo={item}/>
        ))}
      </ul>
    </section>
  )
};

export default todoList;
