import { createSelector } from 'reselect';
import selectn from 'selectn';
import { roundN } from '../utils/MathUtils';

const getCurrencies = ({ currencies }) => currencies;
const getLatest = ({ latest }) => latest;
const getUserBalances = ({ currentUser: { balances } }) => balances;

const getUserCurrencyBalance = ({ currentUser: { balances } }, { currency }) =>
  balances[currency] || 0;

const getExchangeAmount = ({ ui: { exchangeAmount } }) => exchangeAmount;

const getExchangeFrom = ({ ui: { exchangeFrom } }) => exchangeFrom;
const getExchangeTo = ({ ui: { exchangeTo } }) => exchangeTo;

const getBalanceFrom = createSelector(
  getUserBalances,
  getExchangeFrom,
  (balances, exchangeFrom) => balances[exchangeFrom] || 0,
);

const getBalanceTo = createSelector(
  getUserBalances,
  getExchangeTo,
  (balances, exchangeTo) => balances[exchangeTo] || 0,
);

const getLatestRatesFrom = createSelector(
  getLatest,
  getExchangeFrom,
  (latest, exchangeFrom) => latest[exchangeFrom] || {},
);

const getLatestRateFromTo = createSelector(
  getLatestRatesFrom,
  getExchangeTo,
  (ratesFrom, exchangeTo) => ratesFrom[exchangeTo],
);

const getExchangeOutput = createSelector(
  getLatestRateFromTo,
  getExchangeAmount,
  (rate, amount) => rate ? roundN(rate * amount, 2) : null,
);

const getCurrenciesTo = createSelector(
  getLatestRatesFrom,
  (ratesFrom) => Object.keys(ratesFrom),
);

export {
  getCurrencies,
  getUserCurrencyBalance,
  getExchangeFrom,
  getExchangeTo,
  getBalanceFrom,
  getBalanceTo,
  getLatestRateFromTo,
  getExchangeAmount,
  getExchangeOutput,
  getCurrenciesTo,
};

