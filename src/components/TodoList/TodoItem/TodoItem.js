import React, { memo, useState, useRef, useEffect } from 'react';

const TodoItem = (props) => {
  const [editingText, setEditingTest] = useState(props.todo.value);
  const isEditing = props.isEditingId === props.todo.id;
  const editingInputRef = useRef(null);
  useEffect(() => {
    if(isEditing) {
      editingInputRef.current.focus();
    }
  })
  const {onEditingTodo} = props;
  const onSetEditingText = (event) => {
    setEditingTest(event.target.value);
  }
  const onSetTodo = () => {
    onEditingTodo(
      {...props.todo,
      value: editingText
    }, 
    props.index,
    props.todo.id);
  };
  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      onSetTodo();
    };
  };

  return (
    <li className={`${props.todo.isCompleted ? 'completed' : ''} ${isEditing ? 'editing': ''}`}>
      { !isEditing ? <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.todo.isCompleted}
          onChange={() => props.completedHandler(props.todo.id)}/>
        <label onDoubleClick={() => props.onSetEditingId(props.todo.id)} >{props.todo.value}</label>
        <button className="destroy" onClick={() => props.onDeleteTodo(props.todo.id)} />
      </div> :
      <input
        ref={editingInputRef}
        onBlur={onSetTodo}
        onKeyPress={event => onKeyPress(event)}
        onChange={(event) => onSetEditingText(event)}
        value={editingText} 
        className="edit" />
      }
    </li>
  )
};

export default memo(TodoItem);
