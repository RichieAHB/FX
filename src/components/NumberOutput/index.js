import React from 'react';
import styles from './styles.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NumberOutput = ({ children, dim, prefix }) => (
  <span
    className={cx({
      root: true,
      dim,
    })}
  >
    {prefix} {children}
  </span>
);

export default NumberOutput;
