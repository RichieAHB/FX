import {
  START_POLLING_LATEST,
  CANCEL_POLLING_LATEST,
  RECEIVE_LATEST,
  POLL_LATEST,
  POLLING_ERROR,
} from '../constants';

const startPollingLatest = base => ({
  type: START_POLLING_LATEST,
  base,
});

const cancelPollingLatest = base => ({
  type: CANCEL_POLLING_LATEST,
});

const receiveLatest = response => ({
  type: RECEIVE_LATEST,
  payload: response,
});

const pollLatest = () => ({
  type: POLL_LATEST,
});

const pollingError = () => ({
  type: POLLING_ERROR,
});

export {
  startPollingLatest,
  cancelPollingLatest,
  receiveLatest,
  pollLatest,
  pollingError,
};