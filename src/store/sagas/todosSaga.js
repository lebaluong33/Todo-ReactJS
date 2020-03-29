import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

export function* fetchData(action) {
  yield console.log("[todosSaga.js]Fetching data.....");
  try {
    const response = yield axios.get('https://todo-reactjs-6641a.firebaseio.com/todoList.json');
    const fetchTodos = [];
    for( let key in response.data) {
      fetchTodos.push({
        ...response.data[key],
        id: key
      });
    };
    yield put(actions.fetchedData(fetchTodos));
  } catch(error) {
    console.log(error);
  };
}