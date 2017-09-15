import { createSelector } from 'reselect';

const getCurrencies = ({ currencies }) => currencies;
const getLatest = ({ latest }) => latest;
const getUserBalances = ({ currentUser: { balances } }) => balances;

const getUserCurrencyBalance = ({ currentUser: { balances } }, { currency }) =>
  balances[currency] || 0;

const getExchangeAmountInput = ({ ui: { exchangeAmountInput } }) => exchangeAmountInput;
const getExchangeOutputInput = ({ ui: { exchangeOutputInput } }) => exchangeOutputInput;

const getExchangeFrom = ({ ui: { exchangeFrom } }) => exchangeFrom;
const getExchangeTo = ({ ui: { exchangeTo } }) => exchangeTo;

const getCurrenciesFrom = createSelector(
  getUserBalances,
  balances => Object.keys(balances).filter(curr => balances[curr] > 0),
);

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

const getMaxBalanceTo = createSelector(
  getBalanceFrom,
  getLatestRateFromTo,
  (balance, rate) => balance * rate,
);

const getCurrenciesTo = createSelector(
  getLatestRatesFrom,
  getExchangeFrom,
  (ratesFrom, fromCurr) => Object.keys(ratesFrom).filter(to => to !== fromCurr),
);

const getCanExchange = createSelector(
  getExchangeAmountInput,
  (amount) => parseFloat(amount) > 0,
);

export {
  getCurrencies,
  getUserCurrencyBalance,
  getCurrenciesFrom,
  getExchangeFrom,
  getExchangeTo,
  getBalanceFrom,
  getBalanceTo,
  getMaxBalanceTo,
  getLatestRateFromTo,
  getExchangeAmountInput,
  getExchangeOutputInput,
  getCurrenciesTo,
  getCanExchange,
};

