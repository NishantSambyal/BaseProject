import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ApiRoutes } from '../../../network/apiRoute';
import {
  fetchProductsFailure as onFailure,
  fetchProductsRequest as onRequest,
  fetchProductsSuccess as onSuccess,
} from '../../reducers/slices/exampleSlice';

export function* fetchProduct(): SagaIterator {
  try {
    const response = yield call(ApiRoutes.products.getProducts);
    yield put(onSuccess(response.data));
  } catch (error) {
    yield put(onFailure((error as Error)?.message));
  }
}

function* watchFetchFamilyBookDetail(): Generator {
  yield takeLatest(onRequest.type, fetchProduct);
}

export function* productSaga() {
  yield watchFetchFamilyBookDetail();
}
