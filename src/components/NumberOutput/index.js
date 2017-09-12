import React from 'react';
import styles from './styles.css';

const NumberOutput = ({ children }) =>
  <span className={styles.root}>{children}</span>

export default NumberOutput;
