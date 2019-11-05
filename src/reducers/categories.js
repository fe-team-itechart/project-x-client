import { handleActions } from 'redux-actions';

import { categories } from '../actions/types';

const initialState = {
  data: [],
};

const getAllCategoriesSuccess = (state, { payload }) => ({
  ...state,
  data: payload,
});

const getAllCategoriesFailure = (state, { payload }) => ({
  ...state,
  data: payload,
});

export default handleActions(
  {
    [categories.GET_ALL_CATEGORIES_SUCCESS]: getAllCategoriesSuccess,
    [categories.GET_ALL_CATEGORIES_FAILURE]: getAllCategoriesFailure,
  },
  initialState
);
