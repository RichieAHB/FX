import React from 'react';
import styles from './styles.css';

const Button = ({ children, disabled, onClick }) => (
  <button className={styles.root} disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

export default Button;
