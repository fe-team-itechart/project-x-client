import { combineReducers } from 'redux';

import authReducer from './user';
import categoriesReducer from './categories';

export default combineReducers({
  user: authReducer,
  categories: categoriesReducer
});
