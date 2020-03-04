import React from 'react';

import Card from 'src/components/Card';
import HomeStyled from './HomeStyled';

const Home = () => (
  <HomeStyled>
    <p>Bienvenue sur mon site de recettes de cuisine. Régalez-vous !</p>
    <div className="cards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </HomeStyled>
);

export default Home;
