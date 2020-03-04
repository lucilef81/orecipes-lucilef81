import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';

import Title from 'src/components/Title';
import Recipe from 'src/containers/Recipe';
import Home from 'src/containers/Home';

const App = ({ fetchRecipes }) => {
  // je déclenche mon chargement initial dès que l'appli est prête, dès que le composant App a été rendu
  useEffect(fetchRecipes, []);
  return (
    <div>
      <Nav />
      <Page>
        <Title />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/recipe/:slug" exact component={Recipe} />
      </Page>
    </div>
  );
};

App.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
};

export default App;
