import React from 'react';
import styles from './styles.css';

const ExchangeBox = ({ dropdown, children }) => (
  <div className={styles.root}>
    <div className={styles.col}>
      {dropdown}
    </div>
    <div className={styles.col}>
      {children}
    </div>
  </div>
);

export default ExchangeBox;
