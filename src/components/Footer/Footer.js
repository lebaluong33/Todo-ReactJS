import React, { memo } from 'react';
import ClearCompleted from './ClearCompleted/ClearCompleted';
import RemainItem from './RemainItem/RemainItem';
import Category from './Category/Category';
import { connect } from 'react-redux';

const footer = (props) => {
  const categories = ['All', 'Active', 'Completed'];
  const itemLeft = props.list.filter(todo => !todo.isCompleted).length;
  const todoCompletedClearable = props.list.length - itemLeft !== 0;
  return (       
  <footer className="footer">
    <span className="todo-count"> 
    <RemainItem itemLeft={itemLeft}/>
    </span> 
    <ul className="filters">
      {categories.map(cate => (
        <Category 
          key={cate}
          name={cate}/>
      ))}
    </ul>
    { todoCompletedClearable && <ClearCompleted />}
  </footer> 
  );
};

const mapStateToProps = state => {
  return {
    list: state.todos.todoList
  }
};

export default connect(mapStateToProps)(memo(footer));