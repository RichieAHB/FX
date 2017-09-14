import { rootSaga } from './index';
import latest from '../reducers/latest';
import SagaTester from 'redux-saga-tester';
import {
  START_POLLING_LATEST,
  POLL_LATEST,
  RECEIVE_LATEST,
  CANCEL_POLLING_LATEST,
} from '../constants';
import fetchMock from 'fetch-mock';
import latestResponse from '../../public/latest';


const initialState = {
  latest: {},
};

const options = {
  error: onError => console.error.bind(console),
};

test('saga runs correctly', async () => {
  fetchMock.get('*', latestResponse);

  const sagaTester = new SagaTester({
    initialState,
    reducers: {
      latest,
    },
    options,
  });

  sagaTester.start(rootSaga);

  sagaTester.dispatch({ type: START_POLLING_LATEST });

  await sagaTester.waitFor(RECEIVE_LATEST);

  sagaTester.dispatch({ type: CANCEL_POLLING_LATEST });

  expect(sagaTester.getState()).toEqual({
    latest: {
      USD: latestResponse.rates,
    },
  });

  expect(sagaTester.numCalled(START_POLLING_LATEST)).toEqual(1);
  expect(sagaTester.numCalled(POLL_LATEST)).toEqual(1);
  expect(sagaTester.numCalled(CANCEL_POLLING_LATEST)).toEqual(1);

  fetchMock.restore();
});
