import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import { fetchData } from './todosSaga';

export function* watchTodos() {
  yield takeEvery(actionTypes.INITIATE_FETCH_DATA, fetchData)
}