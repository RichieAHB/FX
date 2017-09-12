import { connect } from 'react-redux';
import Button from '../components/Button';
import { getCanExchange } from '../selectors';

const mapStateToProps = state => ({
  disabled: !getCanExchange(state),
});

export default connect(mapStateToProps)(Button);
