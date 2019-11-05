import { fork, all } from 'redux-saga/effects';

import auth from './auth';
import profile from './profile';
import categories from './categories';

export default function*() {
  yield all([fork(auth), fork(profile), fork(categories)]);
}
