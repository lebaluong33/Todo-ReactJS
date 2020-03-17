import React, { useState, memo } from 'react';

const Header = (props) => {
  const [todo, setTodo] = useState('');

  const onKeyPressHandler = (event) => {
    if(event.key === 'Enter' && todo.trim() !== ''){
      const todoItem = {
        id: new Date().valueOf(),
        value: todo,
        isCompleted: false
      };
      props.changed(todoItem);
      setTodo('');
    }
  };

  const onChangeTextHandler = (event) => {
    setTodo(event.target.value);
  }

  return( <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={(event => onChangeTextHandler(event))}
        onKeyPress={(event) => onKeyPressHandler(event)}
        value={todo}
      />
    </header>
  );
};

export default memo(Header);