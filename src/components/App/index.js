import React from 'react';
import { Route } from 'react-router-dom';

import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';

import Title from 'src/components/Title';
import Recipe from 'src/components/Recipe';
import Home from 'src/components/Home';

import data from 'src/data';

const App = () => (
  <div>
    <Nav />
    <Page>
      <Title />
      <Route path="/" exact>
        <Home recipes={data} />
      </Route>
      <Route path="/recipe" exact>
        <Recipe recipe={data[1]} />
      </Route>
    </Page>
  </div>
);

export default App;
