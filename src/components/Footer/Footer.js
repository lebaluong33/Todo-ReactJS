import React, { memo } from 'react';
import ClearCompleted from './ClearCompleted/ClearCompleted';
import RemainItem from './RemainItem/RemainItem';
import Category from './Category/Category';

const footer = (props) => {
  const categories = ['All', 'Active', 'Completed'];
  return (       
  <footer className="footer">
    <span className="todo-count"> 
    <RemainItem itemLeft={props.itemLeft}/>
    </span> 
    <ul className="filters">
      {categories.map(cate => (
        <Category 
          key={cate}
          setCategory={props.setCategory} 
          category={props.category}
          name={cate}/>
      ))}
    </ul>
    {props.completedItem !== 0 && <ClearCompleted clearCompleted={props.clearCompleted} itemLeft />}
  </footer> 
  );
};

export default memo(footer);