import React, { memo } from 'react';
import ClearCompleted from '../UI/ClearCompleted/ClearCompleted';
import RemainItem from './RemainItem/RemainItem';
import Category from './Category/Category';

const footer = (props) => {
  const categories = ['All', 'Active', 'Completed'];
  return (       
  <footer className="footer">
    {props.todoListLength > 0 ? <span className="todo-count">
    <RemainItem itemLeft={props.itemLeft}/>
    </span> : null }
    <ul className="filters">
      <Category 
        setCategory={props.setCategory} 
        category={props.category} 
        name={categories[0]}/>
      <Category
        setCategory={props.setCategory} 
        category={props.category} 
        name={categories[1]}/>
      <Category
        setCategory={props.setCategory} 
        category={props.category} 
        name={categories[2]}/>
    </ul>
    <ClearCompleted clearCompleted={props.clearCompleted} /> 
  </footer>
  )
};

export default memo(footer);