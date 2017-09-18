import React from 'react';
import { connect } from 'react-redux';
import CurrencyDropdown from './CurrencyDropdown';
import { getExchangeFrom } from '../selectors';
import { resetExchangeAmount, updateExchangeFrom } from '../actions';
import { startPollingLatest, cancelPollingLatest } from '../actions';

class ExchangeFrom extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.value) {
      this.getRates(this.props.value);
    }
  }

  getRates(value) {
    this.props.dispatch(cancelPollingLatest(value));
    this.props.dispatch(startPollingLatest(value));
  }

  handleChange({ value }) {
    this.props.onChange(value);
    this.getRates(value);
  }

  render() {
    const { dispatch, ...props } = this.props;
    return (
      <CurrencyDropdown {...props} onChange={this.handleChange} />
    );
  }
}

const mapStateToProps = state => ({
  value: getExchangeFrom(state),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  onChange: value => {
    dispatch(updateExchangeFrom(value));
    dispatch(resetExchangeAmount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeFrom);
