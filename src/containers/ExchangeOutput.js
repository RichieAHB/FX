import { connect } from 'react-redux';
import { getExchangeOutput } from '../selectors';
import NumberOutput from '../components/NumberOutput';

const mapStateToProps = state => {
  const output = getExchangeOutput(state);
  const isZero = parseFloat(output) === 0;
  const value = isZero ? "0" : output;
  return {
    dim: isZero,
    children: value,
    prefix: '+',
  }
};

export default connect(mapStateToProps)(NumberOutput);
