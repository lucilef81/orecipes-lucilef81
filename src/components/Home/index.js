import React from 'react';
import PropTypes from 'prop-types';

import Card from 'src/components/Card';
import HomeStyled from './HomeStyled';

const Home = ({ recipes }) => (
  <HomeStyled>
    <p>Bienvenue sur mon site de recettes de cuisine. Régalez-vous !</p>
    <div className="cards">
      {recipes.map((recipe) => (
        <Card key={recipe.id} {...recipe} />
      ))}
    </div>
  </HomeStyled>
);

Home.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Home;
