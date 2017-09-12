import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import UserCurrencyBalance from './UserCurrencyBalance';
import 'react-select/dist/react-select.css';

const mapStateToProps = (state, { value, currencies }) => {
  const options = currencies.map(currency => ({
      value: currency,
      label: (
        <span>
          <span>{currency} : </span>
          <UserCurrencyBalance currency={currency} />
        </span>
      ),
  }));

  return {
    clearable: false,
    options,
    valueRenderer: ({ value }) => <span>{value}</span>,
  };
};

export default connect(mapStateToProps)(Select);
