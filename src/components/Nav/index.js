import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { getUrlByRecipeTitle } from 'src/selectors/recipes';
import NavStyled from './NavStyled';


const Nav = ({ recipes }) => (
  <NavStyled>
    <NavLink exact to="/">Accueil</NavLink>
    {recipes.map(({ id, title }) => (
      <NavLink exact to={getUrlByRecipeTitle(title)} key={id}>{title}</NavLink>
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
