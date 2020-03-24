import React, { Component } from 'react';

import Header from '../components/Header/Header';
import TodoList from '../components/TodoList/TodoList';
import Footer from '../components/Footer/Footer';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const todoListLength = this.props.todoList.length;
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
}

const mapStateToProps = state => {
  return {
    todoList: state.todos.todoList
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
