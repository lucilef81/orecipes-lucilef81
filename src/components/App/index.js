import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';

import Title from 'src/components/Title';
import Recipe from 'src/containers/Recipe';
import Home from 'src/containers/Home';
import LoginForm from 'src/containers/LoginForm';

const App = ({
  fetchRecipes,
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
}) => {
  // je déclenche mon chargement initial dès que l'appli est prête, dès que le composant App a été rendu
  useEffect(fetchRecipes, []);
  return (
    <div>
      <Nav />
      <Page>
        <Title />
        <LoginForm
          email={email}
          password={password}
          changeField={changeField}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/recipe/:slug' exact component={Recipe} />
      </Page>
    </div>
  );
};

App.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default App;
