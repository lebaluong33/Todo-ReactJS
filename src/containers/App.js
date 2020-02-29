import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Todos from '../components/Todos/Todos';
import Footer from '../components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="todoapp">
        <Header />
        <Todos />
        <Footer />
      </div>
    );
  };
}

export default App;
