import React from 'react';
import PropTypes from 'prop-types';

import NavStyled from './NavStyled';

const Nav = ({ recipes }) => (
  <NavStyled>
    <a href="">Accueil</a>
    {recipes.map(({ id, title }) => (
      <a key={id} href="">{title}</a>
    ))}
  </NavStyled>
);

Nav.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Nav;
