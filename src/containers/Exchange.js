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
          dropdown={<ExchangeFrom currencies={['GBP']} symbol={false} />}
          balance={<BalanceFrom />}
          offset
        >
          <ExchangeInput />
        </ExchangeBox>
        <RateComparison />
        <ExchangeBox
          dropdown={<ExchangeTo currencies={this.props.currenciesTo} symbol={false} />}
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
  }
}

const mapStateToProps = state => ({
  currenciesTo: getCurrenciesTo(state),
});

export default connect(mapStateToProps)(Exchange);
