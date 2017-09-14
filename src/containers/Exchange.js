import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import ExchangeFrom from './ExchangeFrom';
import ExchangeTo from './ExchangeTo';
import ExchangeBox from '../components/ExchangeBox';
import ExchangeInput from './ExchangeInput';
import ExchangeOutput from './ExchangeOutput';
import BalanceFrom from './BalanceFrom';
import BalanceTo from './BalanceTo';
import RateComparison from './RateComparison';
import ExchangeButton from './ExchangeButton';
import ExchangeActions from '../components/ExchangeActions';
import { getCurrenciesTo } from '../selectors';

const Exchange = ({ base, currenciesTo }) => (
  <Layout title="Exchange">
    <ExchangeBox
      dropdown={<ExchangeFrom currencies={[base]} symbol={false} />}
      balance={<BalanceFrom />}
      offset
    >
      <ExchangeInput focus />
    </ExchangeBox>
    <RateComparison />
    <ExchangeBox
      dropdown={<ExchangeTo currencies={currenciesTo} symbol={false} />}
      balance={<BalanceTo />}
    >
      <ExchangeOutput />
    </ExchangeBox>
    <ExchangeActions>
      <ExchangeButton>
        Exchange
      </ExchangeButton>
    </ExchangeActions>
  </Layout>
);

const mapStateToProps = (state, props) => ({
  // TODO: memoize this
  currenciesTo: getCurrenciesTo(state).filter(curr => props.whitelistedCurrencies.indexOf(curr) > -1),
});

export default connect(mapStateToProps)(Exchange);
