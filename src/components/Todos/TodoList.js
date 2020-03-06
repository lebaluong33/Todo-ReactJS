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
        <TodoItem />
        <TodoItem />
      </ul>
    </section>
  )
};

export default todoList;