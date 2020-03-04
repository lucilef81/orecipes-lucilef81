import axios from 'axios'

import { AUTH, err } from 'src/actions/auth';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case AUTH: {
     const state = store.getState();
     axios.post('http://localhost:3001/login', {
       email: state.user.email,
       password: state.user.password
     });
     .then((res) => {
       store.dispatch(auth(res.data));
     })
     .catch((error) => {
       store.dispatch(err());
     });
     next(action);
     break;
    }
    default:
      next(action)

export default auth;
