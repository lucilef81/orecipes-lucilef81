import React from 'react';
import { Route } from 'react-router-dom';

import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';

import Title from 'src/components/Title';
import Recipe from 'src/containers/Recipe';
import Home from 'src/containers/Home';

const App = () => (
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

export default App;
