import { connect } from 'react-redux';
import BalanceDisplay from '../components/BalanceDisplay';
import { getBalanceTo, getExchangeTo } from '../selectors';

const mapStateToProps = state => ({
  amount: getBalanceTo(state),
  currency: getExchangeTo(state),
});

export default connect(mapStateToProps)(BalanceDisplay);
