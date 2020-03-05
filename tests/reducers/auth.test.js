import { expect } from 'chai';

import reducer, { initialState } from 'src/reducers/auth';
import { logout, getUser } from 'src/actions/auth';

describe('reducer for auth', () => {
  describe('structure', () => {
    it('is a function', () => {
      expect(reducer).to.be.a('function');
    });

    it('check initial state', () => {
      expect(reducer()).to.be.an('object');
      expect(reducer()).to.be.eql(initialState);
    });
  });

  describe('with actions', () => {
    it('should return a modified state when receive GET_USER', () => {
      const newAuth = [{ a: 1 }],
      const action = getUser(newAuth);
      const modifiedState = reducer(initialState, action);
      expect(modifiedState).to.be.eql({ list: newAuth });
    });
  });
  describe('with actions', () => {
    it('should return a modified state when receive LOGOUT', () => {
      const newLogout = !isLogged
      const action = logout(newLogout);
      const modifiedState = reducer(initialState, action);
      expect(modifiedState).to.be.eql({ list: newLogout });
    });
  });
});
