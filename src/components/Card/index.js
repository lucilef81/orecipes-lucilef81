import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getUrlByRecipeTitle } from 'src/selectors/recipes';
import CardStyled from './CardStyled';

const Card = ({ difficulty, thumbnail, title }) => (
  <CardStyled>
    <img src={thumbnail} alt="" />
    <div className="content">
      <h2 className="content-title">{title}</h2>
      <p className="content-text">{difficulty}</p>
      <Link className="content-link" to={getUrlByRecipeTitle(title)}>Voir la recette</Link>
    </div>
  </CardStyled>
);

Card.propTypes = {
  difficulty: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
