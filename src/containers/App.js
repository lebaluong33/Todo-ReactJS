import React, { Component } from 'react';

import Header from '../components/Header/Header';
import TodoList from '../components/Todos/TodoList';
import Footer from '../components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="todoapp">
        <Header />
        <TodoList />
        <Footer />
      </div>
    );
  };
}

export default App;
