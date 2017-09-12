import { connect } from 'react-redux';
import NumberInput from '../components/NumberInput';
import { getBalanceFrom, getExchangeAmount } from '../selectors';
import { updateExchangeAmount } from '../actions';

const mapStateToProps = (state) => {
  const amount = getExchangeAmount(state);
  return {
    dim: parseFloat(amount) === 0,
    max: getBalanceFrom(state),
    value: amount,
    prefix: '-',
  }
};

const mapDispatchToProps = (dispatch) => ({
  onChange: value => dispatch(updateExchangeAmount(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumberInput);
