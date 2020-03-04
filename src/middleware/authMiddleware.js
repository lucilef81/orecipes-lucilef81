import axios from 'axios';

import { LOGIN, getUser } from 'src/actions/auth';

const auth = store => next => action => {
  switch (action.type) {
    case LOGIN: {
      const { email, password } = action.payload;
      axios
        .post('http://localhost:3001/login', {
          email,
          password,
        })
        .then(res => {
          store.dispatch(getUser(res.data.info));
        })
        .catch(error => {
          throw new Error(error.message);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default auth;
