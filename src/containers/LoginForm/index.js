import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';
import { login, logout } from 'src/actions/auth';

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
