import React, { Component } from 'react';

import Header from '../components/Header/Header';
import TodoList from '../components/Todos/TodoList';
import Footer from '../components/Footer/Footer';

class App extends Component {
  state = {
    todoList: []
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
  }

  render() {
    return (
      <div className="todoapp">
        <Header changed={this.onAddTodoHandler}  />
        <TodoList 
          onDeleteTodo = {this.onDeleteTodoHandler}
          completedHandler={this.onCompletedHandler} 
          todos={this.state.todoList}/>
        <Footer />
      </div>
    );
  };
}

export default App;
