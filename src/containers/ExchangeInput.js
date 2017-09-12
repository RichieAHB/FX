import { connect } from 'react-redux';
import NumberInput from '../components/NumberInput';
import { getExchangeAmount } from '../selectors';
import { updateExchangeAmount } from '../actions';

const mapStateToProps = (state) => ({
  value: getExchangeAmount(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: ({ target: { value }}) => dispatch(updateExchangeAmount(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumberInput);
