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
import { startPollingLatest, cancelPollingLatest } from '../actions';
import { getCurrenciesTo } from '../selectors';

class Exchange extends React.Component {

  componentDidMount() {
    this.props.dispatch(startPollingLatest());
  }

  componentWillUnmount() {
    this.props.dispatch(cancelPollingLatest());
  }

  render() {
    return (
      <Layout title="Exchange">
        <ExchangeBox
          dropdown={<ExchangeFrom currencies={['GBP']} />}
          balance={<BalanceFrom />}
        >
          <ExchangeInput />
        </ExchangeBox>
        <RateComparison />
        <ExchangeBox
          dropdown={<ExchangeTo currencies={this.props.currenciesTo} />}
          balance={<BalanceTo />}
          offset
        >
          <ExchangeOutput />
        </ExchangeBox>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  currenciesTo: getCurrenciesTo(state),
});

export default connect(mapStateToProps)(Exchange);
