import { connect } from 'react-redux';
import Button from '../components/Button';
import {
  getCanExchange,
  getExchangeFrom,
  getExchangeAmount,
  getExchangeTo,
  getExchangeOutput,
} from '../selectors';
import { exchangeCurrentUser } from '../actions';

const mapStateToProps = state => ({
  disabled: !getCanExchange(state),
  exchangeFrom: getExchangeFrom(state),
  amountFrom: getExchangeAmount(state),
  exchangeTo: getExchangeTo(state),
  output: getExchangeOutput(state),
});

const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = (
  { exchangeFrom, amountFrom, exchangeTo, output, ...stateProps },
  { dispatch },
  ownProps
) => ({
  ...ownProps,
  ...stateProps,
  onClick: () => dispatch(exchangeCurrentUser(exchangeFrom, amountFrom, exchangeTo, output)),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Button);
