import React from 'react';
import currencySymbolMap from 'currency-symbol-map';

const CurrencyDisplay = ({ currency, amount, long = false }) => {
  const decimalPlaces = long ? 4 : 2;
  const amountStr = amount.toFixed(decimalPlaces);

  const [int, dec] = amountStr.split('.');

  return (
    <span>
      <span>{`${currencySymbolMap(currency)}`}</span>
      <span>{int}.</span>
      {long ? (
        <span>
          <span>{dec.slice(0, 2)}</span>
          <small>{dec.slice(2)}</small>
        </span>
      ) : (
        <span>{dec}</span>
      )}
    </span>
  );
}

export default CurrencyDisplay;
