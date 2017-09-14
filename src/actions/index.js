import {
  START_POLLING_LATEST,
  CANCEL_POLLING_LATEST,
  RECEIVE_LATEST,
  POLL_LATEST,
  POLLING_ERROR,
  UPDATE_EXCHANGE_AMOUNT,
  UPDATE_EXCHANGE_FROM,
  UPDATE_EXCHANGE_TO,
  EXCHANGE_CURRENT_USER,
} from '../constants';
import { roundN } from '../utils/MathUtils';
import { sanitizeCurrency } from '../utils/StringUtils';

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

const updateExchangeAmount = (amount, output) => ({
  type: UPDATE_EXCHANGE_AMOUNT,
  payload: {
    amount,
    output,
  },
});

const updateExchangeAmountInput = (exchangeAmount, rate) => {
  const amount = sanitizeCurrency(exchangeAmount);
  const output = roundN(parseFloat(rate) * parseFloat(amount), 2).toFixed(2);
  return updateExchangeAmount(amount, output);
};

const updateExchangeOutputInput = (exchangeOutput, rate) => {
  const output = sanitizeCurrency(exchangeOutput);
  const amount = roundN(parseFloat(output) / parseFloat(rate), 2).toFixed(2);
  return updateExchangeAmount(amount, output);
};


const updateExchangeFrom = exchangeFrom => ({
  type: UPDATE_EXCHANGE_FROM,
  payload: exchangeFrom,
});

const updateExchangeTo = exchangeTo => ({
  type: UPDATE_EXCHANGE_TO,
  payload: exchangeTo,
});

const exchangeCurrentUser = (exchangeFrom, amountFrom, exchangeTo, output) => ({
  type: EXCHANGE_CURRENT_USER,
  payload: {
    exchangeFrom,
    amountFrom: roundN(parseFloat(amountFrom), 2),
    exchangeTo,
    output: roundN(parseFloat(output), 2),
  },
});

export {
  startPollingLatest,
  cancelPollingLatest,
  receiveLatest,
  pollLatest,
  pollingError,
  updateExchangeAmountInput,
  updateExchangeOutputInput,
  updateExchangeFrom,
  updateExchangeTo,
  exchangeCurrentUser,
};