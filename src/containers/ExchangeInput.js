import { connect } from 'react-redux';
import NumberInput from '../components/NumberInput';
import { getBalanceFrom, getExchangeAmountInput, getLatestRateFromTo } from '../selectors';
import { updateExchangeAmountInput } from '../actions';

const mapStateToProps = state => {
  const amount = getExchangeAmountInput(state);
  return {
    dim: parseFloat(amount) === 0,
    max: getBalanceFrom(state),
    value: amount,
    prefix: '-',
    rate: getLatestRateFromTo(state),
  }
};

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = ({ rate, ...stateProps }, { dispatch }, ownProps) => ({
  ...ownProps,
  ...stateProps,
  onChange: value => dispatch(updateExchangeAmountInput(value, rate)),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(NumberInput);
