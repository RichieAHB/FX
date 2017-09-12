import { connect } from 'react-redux';
import CurrencyDropdown from './CurrencyDropdown';
import { getExchangeTo } from '../selectors';
import { updateExchangeTo } from '../actions';

const mapStateToProps = state => ({
  value: getExchangeTo(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ value }) => dispatch(updateExchangeTo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDropdown);
