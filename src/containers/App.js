import React, { useEffect } from 'react';

import Header from '../components/Header/Header';
import TodoList from '../components/TodoList/TodoList';
import Footer from '../components/Footer/Footer';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

const App = (props) => {
  const { fetchData } = props;
  useEffect(() => {
    fetchData();
  }, [fetchData])
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

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(actions.fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
