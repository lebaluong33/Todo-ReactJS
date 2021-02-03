import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const Header = (props) => {
  const { todoList } = props;
  const [todo, setTodo] = useState('');
  const updatedList = todoList.map(item => ({value: item.value, isCompleted: item.isCompleted}));
  const onKeyPressHandler = (event) => {
    if(event.key === 'Enter' && todo.trim() !== ''){
      const todoItem = {
        id: new Date().valueOf(),
        value: todo,
        isCompleted: false
      };
      props.changed(todoItem);
      updatedList.push({value: todoItem.value, isCompleted: todoItem.isCompleted});
      props.saveChanged(updatedList);
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

const mapStateToProps = state => {
  return {
    todoList: state.todos.todoList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveChanged: (todoList) => dispatch(actions.initiatePutData(todoList)),
    changed: (todo) => dispatch(actions.addTodoHandler(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Header));