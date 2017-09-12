import React from 'react';
import styles from './styles.css';

const NumberOutput = ({ children, prefix }) =>
  <span className={styles.root}>{prefix} {children}</span>

export default NumberOutput;
