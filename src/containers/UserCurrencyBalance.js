import { connect } from 'react-redux';
import { getUserCurrencyBalance } from '../selectors';
import CurrencyDisplay from '../components/CurrencyDisplay';

const mapStateToProps = (state, props) => ({
  amount: getUserCurrencyBalance(state, props),
  currency: props.currency,
});

export default connect(mapStateToProps)(CurrencyDisplay);
