import React from 'react';

import Nav from 'src/components/Nav';
import Page from 'src/components/Page';

import Title from 'src/components/Title';
import Recipe from 'src/components/Recipe';
import Home from 'src/components/Home';

import data from 'src/data';

const App = () => (
  <div>
    <Nav recipes={data} />
    <Page>
      <Title />
      <Recipe recipe={data[1]} />
    </Page>
  </div>
);

export default App;
