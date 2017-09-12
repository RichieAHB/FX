import { connect } from 'react-redux';
import NumberInput from '../components/NumberInput';
import { getExchangeAmount } from '../selectors';
import { updateExchangeAmount } from '../actions';

const mapStateToProps = (state) => ({
  value: getExchangeAmount(state),
  prefix: '-',
});

const mapDispatchToProps = (dispatch) => ({
  onChange: value => dispatch(updateExchangeAmount(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumberInput);
