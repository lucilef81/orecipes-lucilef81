import React from 'react';

import CardStyled from './CardStyled';

const Card = () => (
  <CardStyled>
    <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
    <div className="content">
      <h2 className="content-title">Titre</h2>
      <p className="content-text">Difficulté : facile</p>
      <a className="content-link" href="">Voir la recette</a>
    </div>
  </CardStyled>
);

export default Card;
