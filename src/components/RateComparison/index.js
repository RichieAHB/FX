import React from 'react';
import CurrencyDisplay from '../CurrencyDisplay';
import styles from './styles.css';

const RateComparison = ({ fromCurrency, toCurrency, rate }) => !!rate && (
  <div className={styles.root}>
    <span className={styles.pill}>
      <CurrencyDisplay currency={fromCurrency} amount={1} />
      <span> = </span>
      <CurrencyDisplay currency={toCurrency} amount={rate} />
    </span>
  </div>
);

export default RateComparison;
