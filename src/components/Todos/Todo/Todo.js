import React from 'react';

const todo = (props) => {
  return (
    <li className={`${props.todo.isCompleted ? 'completed' : ''}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.todo.isCompleted}
          onChange={() => props.completedHandler(props.todo.id)}/>
        <label >{props.todo.value}</label>
        <button className="destroy" onClick={() => props.onDeleteTodo(props.todo.id)} />
      </div>
    </li>
  )
};

export default todo;