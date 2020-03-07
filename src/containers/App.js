import React, { Component } from 'react';

import Header from '../components/Header/Header';
import TodoList from '../components/Todos/TodoList';
import Footer from '../components/Footer/Footer';

class App extends Component {
  state = {
    todoList: [],
    isSelectedAll: false,
    category: ''
  }

  onAddTodoHandler = (item) => {
    const updatedTodos = this.state.todoList;
    updatedTodos.push(item);
    this.setState({todoList: updatedTodos});
  }
  
  onCompletedHandler = (id) => {
    const updatedTodoIndex = this.state.todoList.findIndex((todo) => todo.id === id);
    const updatedTodoItem = {...this.state.todoList[updatedTodoIndex]};
    updatedTodoItem.isCompleted = !this.state.todoList[updatedTodoIndex].isCompleted;
    const updatedTodoList = [...this.state.todoList];
    updatedTodoList[updatedTodoIndex] = updatedTodoItem;
    this.setState({todoList: updatedTodoList});
  };

  onDeleteTodoHandler = (id) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter(todo => todo.id !== id)
    }));
  };

  clearCompletedHandler = () => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter(todo => !todo.isCompleted)
    }));
  };

  filterTodoHandler = (type = '') => {
    switch(type) {
      case 'ACTIVE': 
        return this.state.todoList.filter(item => !item.isCompleted);
      case 'COMPLETED':
        return this.state.todoList.filter(item => item.isCompleted);
      default: 
        return this.state.todoList
    };
  };

  setCategoryHandler = (type) => {
    this.setState({category: type});
  }

  render() {
    const todoListLength = this.state.todoList.length;
    const itemLeft =  this.state.todoList.filter(item => !item.isCompleted).length;
    const filteredItem = this.filterTodoHandler(this.state.category);
    return (
      <div className="todoapp">
        <Header changed={this.onAddTodoHandler}  />
        <TodoList 
          onDeleteTodo = {this.onDeleteTodoHandler}
          completedHandler={this.onCompletedHandler} 
          todos={filteredItem}/>
        { todoListLength !== 0 
        ? <Footer 
            category={this.state.category}
            setCategory={this.setCategoryHandler}
            todoListLength={todoListLength} 
            clearCompleted={this.clearCompletedHandler}
            itemLeft={itemLeft} /> 
        : null}
      </div>
    );
  };
}

export default App;
