import { AUTH, ERR } from 'src/actions/auth';

const initialState = {
  hasError: false,
  user: {
    email: '',
    password: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
          password: action.password,
        },
      };
    case ERR:
      return {
        ...state,
        hasError: true,
      };
    default:
      return state;
  }
};

export default reducer;
