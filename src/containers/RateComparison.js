import React from 'react';
import { connect } from 'react-redux';
import CurrencyDisplay from '../components/CurrencyDisplay';
import {
  getExchangeFrom,
  getExchangeTo,
  getLatestRateFromTo,
} from '../selectors';

const RateComparison = ({ fromCurrency, toCurrency, rate }) => !!rate && (
  <div>
    <CurrencyDisplay currency={fromCurrency} amount={1} />
    <span> = </span>
    <CurrencyDisplay currency={toCurrency} amount={rate} />
  </div>
);

const mapStateToProps = state => ({
  fromCurrency: getExchangeFrom(state),
  toCurrency: getExchangeTo(state),
  rate: getLatestRateFromTo(state),
});

export default connect(mapStateToProps)(RateComparison);
