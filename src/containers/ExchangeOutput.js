import { connect } from 'react-redux';
import { getExchangeOutputInput, getMaxBalanceTo, getLatestRateFromTo } from '../selectors';
import NumberInput from '../components/NumberInput';
import { updateExchangeOutputInput } from '../actions';

const mapStateToProps = state => {
  const output = getExchangeOutputInput(state);
  const isZero = parseFloat(output) === 0;
  const value = isZero ? "0" : output;
  return {
    dim: isZero,
    value,
    max: getMaxBalanceTo(state),
    prefix: '+',
    rate: getLatestRateFromTo(state),
  }
};

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = ({ rate, ...stateProps }, { dispatch }, ownProps) => ({
  ...ownProps,
  ...stateProps,
  onChange: value => dispatch(updateExchangeOutputInput(value, rate)),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(NumberInput);
