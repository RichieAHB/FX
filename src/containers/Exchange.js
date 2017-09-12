import React from 'react';
import { connect } from 'react-redux';
import ExchangeFrom from './ExchangeFrom';
import ExchangeTo from './ExchangeTo';
import ExchangeBox from '../components/ExchangeBox';
import ExchangeInput from './ExchangeInput';
import ExchangeOutput from './ExchangeOutput';
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
      <div>
        <h1>Exchange</h1>
        <ExchangeBox dropdown={<ExchangeFrom currencies={['GBP']} />}>
          <ExchangeInput />
        </ExchangeBox>
        <RateComparison />
        <ExchangeBox dropdown={<ExchangeTo currencies={this.props.currenciesTo} />}>
          <ExchangeOutput />
        </ExchangeBox>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currenciesTo: getCurrenciesTo(state),
});

export default connect(mapStateToProps)(Exchange);
