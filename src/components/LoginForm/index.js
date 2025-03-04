import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
// import { useField } from './hooks';

import './styles.css';

const LoginForm = ({ login, logout, isLogged, loggedMessage }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const changeField = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = values;
    login(email, password);
  };

  return (
    <div className='login-form'>
      {isLogged && (
        <div className='login-form-logged'>
          <p className='login-form-message'>{loggedMessage}</p>
          <button type='button' className='login-form-button' onClick={logout}>
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (
        <form
          autoComplete='off'
          className='login-form-element'
          onSubmit={handleSubmit}
        >
          <Field
            name='email'
            placeholder='Adresse Email'
            onChange={changeField}
            value={values.email}
          />
          <Field
            name='password'
            type='password'
            placeholder='Mot de passe'
            onChange={changeField}
            value={values.password}
          />
          <button type='submit' className='login-form-button'>
            OK
          </button>
        </form>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
