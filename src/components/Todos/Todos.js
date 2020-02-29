import React from 'react';

import Todo from './Todo/Todo';

const todos = (props) => {
  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox" />
      <label htmlFor="toggle-all" ></label>
      <ul className="todo-list">
        <Todo />
        <Todo />
      </ul>
    </section>
  )
};

export default todos;