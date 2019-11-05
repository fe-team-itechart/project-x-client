import { createAction } from 'redux-actions';

import { categories } from './types';

const getAllCategoriesRequest = createAction(
  categories.GET_ALL_CATEGORIES_REQUEST
);

const getAllCategoriesSuccess = createAction(
  categories.GET_ALL_CATEGORIES_SUCCESS
);

const getAllCategoriesFailure = createAction(
  categories.GET_ALL_CATEGORIES_FAILURE
);

export {
  getAllCategoriesRequest,
  getAllCategoriesSuccess,
  getAllCategoriesFailure,
};
