import { connect } from 'react-redux';
import Button from '../components/Button';
import {
  getCanExchange,
  getExchangeFrom,
  getExchangeAmountInput,
  getExchangeTo,
  getExchangeOutputInput,
} from '../selectors';
import {
  resetExchangeAmount,
  exchangeCurrentUser,
} from '../actions';

const mapStateToProps = state => ({
  disabled: !getCanExchange(state),
  exchangeFrom: getExchangeFrom(state),
  amountFrom: getExchangeAmountInput(state),
  exchangeTo: getExchangeTo(state),
  output: getExchangeOutputInput(state),
});

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (
  { exchangeFrom, amountFrom, exchangeTo, output, ...stateProps },
  { dispatch },
  ownProps
) => ({
  ...ownProps,
  ...stateProps,
  onClick: () => {
    dispatch(exchangeCurrentUser(exchangeFrom, amountFrom, exchangeTo, output));
    dispatch(resetExchangeAmount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Button);
