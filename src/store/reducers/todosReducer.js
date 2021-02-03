import * as actionTypes from '../actions/actionTypes';
import { checkSelectedAll } from '../../utilitys/utilitys';

const initialState = {
  todoList: [],
  isSelectedAll: false,
  category: 'ALL',
  isEditingId: '',
};

const todosReducer = (state = initialState, action) => {
  const list = JSON.parse(JSON.stringify(state.todoList));
  switch (action.type) {
    case actionTypes.ADD_TODO_HANDLER:
      list.push(action.item);
      return {
        ...state,
        todoList: list,
        isSelectedAll: checkSelectedAll(list),
      };
    case actionTypes.COMPLETED_HANDLER:
      const updatedList = state.todoList.map((item) =>
        item.id === action.id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
      return {
        ...state,
        todoList: updatedList,
        isSelectedAll: checkSelectedAll(updatedList),
      };
    case actionTypes.SELECTED_ALL_HANDLER:
      const selectedAllList = state.todoList.map((todo) => {
        return { ...todo, isCompleted: !state.isSelectedAll };
      });
      return {
        ...state,
        todoList: selectedAllList,
        isSelectedAll: !state.isSelectedAll,
      };
    case actionTypes.CLEAR_COMPLETED_HANDLER:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => !todo.isCompleted),
      };
    case actionTypes.DELETE_TODO_HANDLER:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
      };
    case actionTypes.SET_CATEGORY_HANDLER:
      return {
        ...state,
        category: action.category,
      };
    case actionTypes.SET_EDITING_ID:
      return {
        ...state,
        isEditingId: action.id,
      };
    case actionTypes.EDITED_TODO_HANDLER:
      return {
        ...state,
      };
    case actionTypes.FETCHED_DATA:
      return {
        ...state,
        todoList: action.todoList,
        isSelectedAll: checkSelectedAll(action.todoList),
      };
    default:
      return state;
  }
};

export default todosReducer;
