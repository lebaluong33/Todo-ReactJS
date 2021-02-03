import { takeLatest, takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import { fetchData, putData, editData } from './todosSaga';

export function* watchTodos() {
  yield takeLatest(actionTypes.INITIATE_FETCH_DATA, fetchData);
  yield takeEvery(actionTypes.INITIATE_PUT_DATA, putData);
  yield takeEvery(actionTypes.EDITED_TODO_HANDLER, editData);
}