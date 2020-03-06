import React from 'react';

const todoItem = (props) => {
  return (
    <li>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"/>
        <label >sasfsd</label>
        <button className="destroy" />
      </div>
    </li>
  )
};

export default todoItem;