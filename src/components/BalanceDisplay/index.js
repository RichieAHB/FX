import React from 'react';
import CurrencyDisplay from '../CurrencyDisplay';
import styles from './styles.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class BalanceDisplay extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasUpdated: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.amount !== prevProps.amount
      && this.props.currency === prevProps.currency
    ) {
      this.setState({
        hasUpdated: true,
      });
    } else if (this.state.hasUpdated) {
      setTimeout(() => this.setState({
        hasUpdated: false,
      }), 400);
    }
  }

  render() {
    return (
      <span className={styles.root}>
        <span>Balance: </span>
        <span
          className={cx({
            amount: true,
            hasUpdated: this.state.hasUpdated,
          })}
        >
          <CurrencyDisplay {...this.props} />
        </span>
      </span>
    );
  }
}

export default BalanceDisplay;
