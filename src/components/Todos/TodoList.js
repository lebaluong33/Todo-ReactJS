import React from 'react';

import TodoItem from './Todo/TodoItem';

const todoList = (props) => {
  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox" />
      <label htmlFor="toggle-all" ></label>
      <ul className="todo-list">
        {props.todos.map((item) =>(
          <TodoItem
            onDeleteTodo={props.onDeleteTodo}
            completedHandler={props.completedHandler}
            key={item.id}
            todo={item}/>
        ))}
      </ul>
    </section>
  )
};

export default todoList;
