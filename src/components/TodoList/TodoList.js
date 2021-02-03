import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import TodoItem from './TodoItem/TodoItem';
import * as actions from '../../store/actions/index';
import { filterTodoHandler } from '../../utilitys/utilitys';

const todoList = (props) => {
  const { todoState, selectedAllHandler } = props;
  const todos = filterTodoHandler(todoState.todoList, todoState.category);
  return (
    <section className="main">
      { todoState.todoList.length ?
      <Fragment>
        <input
          onChange={selectedAllHandler}
          checked={todoState.isSelectedAll}
          className="toggle-all"
          type="checkbox" />
        <label
          onClick={selectedAllHandler}
          htmlFor="toggle-all" ></label>
        </Fragment>
         : null}
      <ul className="todo-list">
        {todos.map((item, index) =>(
          <TodoItem
            index={index}
            key={item.id}
            todo={item}/>
        ))}
      </ul>
    </section>
  )
};

const mapStateToProps = state => {
  return {
    todoState: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectedAllHandler: () => dispatch(actions.selectedAllHandler())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoList);
