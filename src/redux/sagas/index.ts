import { all } from 'redux-saga/effects';

import { productSaga } from './saga/exampleSaga';
export default function* mainSaga() {
  yield all([productSaga()]);
}
