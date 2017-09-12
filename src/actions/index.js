import {
  START_POLLING_LATEST,
  CANCEL_POLLING_LATEST,
  RECEIVE_LATEST,
  POLL_LATEST,
  POLLING_ERROR,
  UPDATE_EXCHANGE_AMOUNT,
  UPDATE_EXCHANGE_FROM,
  UPDATE_EXCHANGE_TO,
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

const updateExchangeAmount = exchangeAmount => ({
  type: UPDATE_EXCHANGE_AMOUNT,
  payload: exchangeAmount,
});

const updateExchangeFrom = exchangeFrom => ({
  type: UPDATE_EXCHANGE_FROM,
  payload: exchangeFrom,
});

const updateExchangeTo = exchangeTo => ({
  type: UPDATE_EXCHANGE_TO,
  payload: exchangeTo,
});

export {
  startPollingLatest,
  cancelPollingLatest,
  receiveLatest,
  pollLatest,
  pollingError,
  updateExchangeAmount,
  updateExchangeFrom,
  updateExchangeTo,
};