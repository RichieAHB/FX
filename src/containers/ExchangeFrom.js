import { connect } from 'react-redux';
import CurrencyDropdown from './CurrencyDropdown';
import { getExchangeFrom } from '../selectors';
import { updateExchangeFrom } from '../actions';

const mapStateToProps = state => ({
  value: getExchangeFrom(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ value }) => dispatch(updateExchangeFrom(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDropdown);
