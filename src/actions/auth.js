export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_USER = 'GET_USER';

export const login = (email, password) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});

export const logout = () => ({
  type: LOGOUT,
});

export const getUser = user => ({
  type: GET_USER,
  payload: user,
});
