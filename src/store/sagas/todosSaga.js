import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

export function* fetchData(action) {
  try {
    const response = yield axios.get(
      'https://todo-reactjs-6641a.firebaseio.com/todoList.json'
    );
    const fetchTodos = [];
    for (let key in response.data) {
      fetchTodos.push({
        ...response.data[key],
        id: key,
      });
    }
    yield put(actions.fetchedData(fetchTodos));
  } catch (error) {
    console.log(error);
  }
}

export function* putData(action) {
  yield axios
    .put(
      'https://todo-reactjs-6641a.firebaseio.com/todoList.json',
      action.todoList
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export function* editData(action) {
  console.log('action.todoList', action.todoList);
  yield axios
    .patch(
      'https://todo-reactjs-6641a.firebaseio.com/todoList.json',
      action.todoList
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
}
