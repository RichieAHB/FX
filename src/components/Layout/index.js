import React from 'react';
import styles from './styles.css';

const Layout = ({ title, children }) => (
  <div className={styles.root}>
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
    </header>
    <main className={styles.main}>
      {children}
    </main>
    <footer className={styles.footer}>
    </footer>
  </div>
);

export default Layout;
