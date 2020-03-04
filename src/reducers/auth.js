import { LOGOUT, GET_USER } from 'src/actions/auth';

const initialState = {
  hasError: false,
  isLogged: false,
  user: {
    email: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        isLogged: true,
      };
    case LOGOUT: {
      return {
        user: null,
        isLogged: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
