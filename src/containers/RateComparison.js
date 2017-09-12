import React from 'react';
import { connect } from 'react-redux';
import RateComparison from '../components/RateComparison';
import {
  getExchangeFrom,
  getExchangeTo,
  getLatestRateFromTo,
} from '../selectors';

const mapStateToProps = state => ({
  fromCurrency: getExchangeFrom(state),
  toCurrency: getExchangeTo(state),
  rate: getLatestRateFromTo(state),
});

export default connect(mapStateToProps)(RateComparison);
