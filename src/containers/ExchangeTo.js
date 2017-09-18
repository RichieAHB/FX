import { connect } from 'react-redux';
import CurrencyDropdown from './CurrencyDropdown';
import { getExchangeTo } from '../selectors';
import { resetExchangeAmount, updateExchangeTo } from '../actions';

const mapStateToProps = state => ({
  value: getExchangeTo(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ value }) => {
    dispatch(updateExchangeTo(value));
    dispatch(resetExchangeAmount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDropdown);
