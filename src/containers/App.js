import React from 'react';

import Header from '../components/Header/Header';
import TodoList from '../components/TodoList/TodoList';
import Footer from '../components/Footer/Footer';
import { connect } from 'react-redux';

const app = (props) => {
  const todoListLength = props.todoList.length;
  return (
    <div className="todoapp">
      <Header />
      <TodoList />
      { todoListLength !== 0 
      ? <Footer /> 
      : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todoList: state.todos.todoList
  };
};

export default connect(mapStateToProps)(app);
