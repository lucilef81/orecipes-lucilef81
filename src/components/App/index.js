import React from 'react';

import Nav from 'src/components/Nav';
import Page from 'src/components/Page';

import Title from 'src/components/Title';
import Recipe from 'src/components/Recipe';
import Home from 'src/components/Home';

const App = () => (
  <div>
    <Nav />
    <Page title="truc">
      <Title />
      <Home />
    </Page>
  </div>
);

export default App;
