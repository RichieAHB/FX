import React from 'react';
import CurrencyDisplay from '../CurrencyDisplay';
import styles from './styles.css';

const BalanceDisplay = ({ amount, currency }) => (
  <span className={styles.root}>
    <span>Balance: </span>
    <CurrencyDisplay currency={currency} amount={amount} />
  </span>
);

export default BalanceDisplay;
