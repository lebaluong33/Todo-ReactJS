import React, { memo } from 'react';

const clearCompleted = (props) => (
  <button 
    className="clear-completed" 
    onClick={props.clearCompleted}>Clear completed</button>
);

export default memo(clearCompleted);