import { connect } from 'react-redux';
import BalanceDisplay from '../components/BalanceDisplay';
import { getExchangeFrom, getBalanceFrom } from '../selectors';

const mapStateToProps = state => ({
  amount: getBalanceFrom(state),
  currency: getExchangeFrom(state),
});

export default connect(mapStateToProps)(BalanceDisplay);
