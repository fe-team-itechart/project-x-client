import { call, put, takeEvery } from 'redux-saga/effects';

import { categories } from '../actions/types';
import * as actions from '../actions/categories';
import { getAllCategories } from '../services/categories';

function* getAllCategoriesSaga({ payload }) {
  try {
    const response = yield call(getAllCategories, payload);
    yield put(actions.getAllCategoriesSuccess(response));
  } catch (err) {
    yield put(actions.getAllCategoriesFailure());
  }
}

export default function*() {
  yield takeEvery(categories.GET_ALL_CATEGORIES_REQUEST, getAllCategoriesSaga);
}
