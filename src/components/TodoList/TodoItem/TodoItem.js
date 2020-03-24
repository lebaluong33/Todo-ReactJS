import React, { memo, useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

const TodoItem = (props) => {
  const { todo, index, onEditedTodo, onSetEditingId, isEditingId } = props;

  const [editingText, setEditingTest] = useState(todo.value);
  const isEditing = isEditingId === todo.id;
  const editingInputRef = useRef(null);
  useEffect(() => {
    if(isEditing) {
      editingInputRef.current.focus();
    }
  });
  const onSetEditingText = (event) => {
    setEditingTest(event.target.value);
  }
  const onSetTodo = () => {
    onEditedTodo(
      {...todo,
      value: editingText
    }, 
    index,
    todo.id);
  };
  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      onSetTodo();
    };
  };

  return (
    <li className={`${todo.isCompleted ? 'completed' : ''} ${isEditing ? 'editing': ''}`}>
      { !isEditing ? <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => props.onCompletedHandler(todo.id)}/>
        <label onDoubleClick={() => onSetEditingId(todo.id)} >{todo.value}</label>
        <button className="destroy" onClick={() => props.onDeleteTodo(todo.id)} />
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

const mapStateToProps = state => {
  return {
    isEditingId: state.todos.isEditingId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onCompletedHandler: (id) => dispatch(actions.completedHandler(id)),
    onDeleteTodo: (id) => dispatch(actions.deleteTodoHandler(id)),
    onSetEditingId: (id) => dispatch(actions.setEditingId(id)),
    onEditedTodo: (todo, index, id) => dispatch(actions.editedTodoHandler(todo, index, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(TodoItem));
