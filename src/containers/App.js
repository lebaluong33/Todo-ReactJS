import React, { Component } from 'react';

import Header from '../components/Header/Header';
import TodoList from '../components/TodoList/TodoList';
import Footer from '../components/Footer/Footer';

class App extends Component {
  state = {
    todoList: [],
    isSelectedAll: false,
    category: '',
    isEditingId: ''
  }

  onAddTodoHandler = (item) => {
    const updatedTodos = [...this.state.todoList];
    updatedTodos.push(item);
    this.setState({todoList: updatedTodos});
  }
  
  onCompletedHandler = (id) => {
    const updatedTodoIndex = this.state.todoList.findIndex((todo) => todo.id === id);
    const updatedTodoItem = {...this.state.todoList[updatedTodoIndex]};
    updatedTodoItem.isCompleted = !this.state.todoList[updatedTodoIndex].isCompleted;
    const updatedTodoList = [...this.state.todoList];
    updatedTodoList[updatedTodoIndex] = updatedTodoItem;
    let isSelectedAll = true;
    const checkIsSelectedAll = updatedTodoList.filter(todo => todo.isCompleted === false);
    if(checkIsSelectedAll.length){
      isSelectedAll = false;
    }
    this.setState({
      todoList: updatedTodoList,
      isSelectedAll: isSelectedAll
    });
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

  setCategoryHandler = (type = '') => {
    this.setState({category: type});
  }

  selectedAllHandler = () => {
    const todoList = [...this.state.todoList];
    const updatedList = todoList.map(todo => {
      return {...todo, isCompleted : !this.state.isSelectedAll}
    });
    this.setState((prevState) => ({
      todoList: updatedList,
      isSelectedAll: !prevState.isSelectedAll
    }));
  };

  onSetEditingId = (id = '') => {
    this.setState({isEditingId: id});
  };

  onEditingTodo = ( todo = {} , index = -1, id) => {
    if(todo.value === '') {
      this.onDeleteTodoHandler(id);
    } else {
      const { todoList: updatedList } = this.state;
      updatedList.splice(index, 1, todo);
      this.setState({
        todoList: updatedList,
        isEditingId: ''
      });
    }
  };

  render() {
    const todoListLength = this.state.todoList.length;
    const itemLeft =  this.state.todoList.filter(item => !item.isCompleted).length;
    const completedItem = todoListLength - itemLeft;
    const filteredItem = this.filterTodoHandler(this.state.category);
    return (
      <div className="todoapp">
        <Header changed={this.onAddTodoHandler}  />
        <TodoList 
          onEditingTodo={this.onEditingTodo}
          onSetEditingId={this.onSetEditingId}
          isEditingId={this.state.isEditingId}
          selectedAllHandler={this.selectedAllHandler}
          todoListLength={todoListLength}
          isSelectedAll={this.state.isSelectedAll}
          onDeleteTodo = {this.onDeleteTodoHandler}
          completedHandler={this.onCompletedHandler} 
          todos={filteredItem}/>
        { todoListLength !== 0 
        ? <Footer 
            category={this.state.category}
            setCategory={this.setCategoryHandler}
            completedItem={completedItem} 
            clearCompleted={this.clearCompletedHandler}
            itemLeft={itemLeft} /> 
        : null}
      </div>
    );
  };
}

export default App;
