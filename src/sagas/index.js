import { delay } from 'redux-saga'
import { all, call, cancel, fork, put, take } from 'redux-saga/effects';
import { START_POLLING_LATEST, CANCEL_POLLING_LATEST } from '../constants';
import { pollLatest, receiveLatest, pollingError } from '../actions/';
import * as FXAPI from '../services/FXAPI';

function* fetchLatest(base) {
  const response = yield call(FXAPI.latest, base);
  yield put(receiveLatest(response));
  yield put(pollLatest());
}

function* poll(base) {
  try {
    yield fetchLatest(base);
    while(true) {
      yield call(delay, 10000);
      yield call(fetchLatest, base);
    }
  } catch (error) {
    yield put(pollingError());
  }
}

function* watchPoll() {
  while (true) {
    const { base } = yield take(START_POLLING_LATEST);
    const polling = yield fork(poll, base);
    yield take(CANCEL_POLLING_LATEST);
    yield cancel(polling);
  }
}

function* rootSaga() {
  yield all([
      watchPoll(),
  ]);
}

export {
  rootSaga,
};
