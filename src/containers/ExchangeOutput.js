import { connect } from 'react-redux';
import { getExchangeOutput } from '../selectors';
import NumberOutput from '../components/NumberOutput';

const mapStateToProps = state => ({
  children: getExchangeOutput(state),
  prefix: '+',
});

export default connect(mapStateToProps)(NumberOutput);
