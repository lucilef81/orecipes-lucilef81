import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';
import { websocketConnect } from 'src/actions/auth';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  websocketConnect: () => {
    dispatch(websocketConnect());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
