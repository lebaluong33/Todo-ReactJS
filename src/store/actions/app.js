import * as actionTypes from './actionTypes';

export const addTodoHandler = (item = {}) => {
  return {
    type: actionTypes.ADD_TODO_HANDLER,
    item
  };
};

export const completedHandler = (id = '') => {
  return {
    type: actionTypes.COMPLETED_HANDLER,
    id
  };
};

export const deleteTodoHandler = (id = '') => {
  return {
    type: actionTypes.DELETE_TODO_HANDLER,
    id
  };
};

export const clearCompletedHandler = () => {
  return {
    type: actionTypes.CLEAR_COMPLETED_HANDLER
  };
};

export const filterTodoHandler = (category = '') => {
  return {
    type: actionTypes.FILTER_TODO_HANDLER,
    category
  };
};

export const setCategoryHandler = (category = '') => {
  return {
    type: actionTypes.SET_CATEGORY_HANDLER,
    category
  };
};

export const selectedAllHandler = () => {
  return {
    type: actionTypes.SELECTED_ALL_HANDLER
  };
};

export const setEditingId = (id = '') => {
  return {
    type: actionTypes.SET_EDITING_ID,
    id
  };
};

export const editedTodoHandler = (todo = {} , index = -1, id = '') => {
  return {
    type: actionTypes.EDITED_TODO_HANDLER,
    todo,
    index,
    id
  };
};

export const fetchData = () => {
  return {
    type: actionTypes.INITIATE_FETCH_DATA
  }
};

export const fetchedData = (todoList) => {
  return {
    type: actionTypes.FETCHED_DATA,
    todoList
  }
};

export const initiatePutData = (todoList) => {
  return {
    type: actionTypes.INITIATE_PUT_DATA,
    todoList
  }
};

export const putData = (todoList) => {
  return {
    type: actionTypes.PUT_DATA,
    todoList
  }
};