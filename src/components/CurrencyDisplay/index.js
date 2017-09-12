import React from 'react';
import currencySymbolMap from 'currency-symbol-map';

const CurrencyDisplay = ({ currency, amount }) => (
  <span>{`${currencySymbolMap(currency)}${amount}`}</span>
);

export default CurrencyDisplay;
