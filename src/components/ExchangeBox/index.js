import React from 'react';
import styles from './styles.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ExchangeBox = ({ balance, dropdown, children, offset }) => (
  <div
    className={cx({
      root: true,
      offset,
    })}
  >
    <div className={styles.row}>
      <div className={styles.col}>
        {dropdown}
      </div>
      <div className={styles.col}>
        {children}
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.col}>
        {balance}
      </div>
    </div>
  </div>
);

export default ExchangeBox;
