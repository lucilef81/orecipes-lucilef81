// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Recipe from 'src/components/Recipe';

// Action Creators & Selector
import { getRecipeBySlug } from 'src/selectors/recipes';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  // je veux transmettre LA bonne recette :
  // j'ai besoin de la liste des recettes : state.recipes.list
  // j'ai besoin du slug : ownProps.match.params.slug
  // je pourrais trouver la recette en fonction de son slug puisque je connais son title et j'ai un selector getSlugByTitle
  recipe: getRecipeBySlug(state.recipes.list, ownProps.match.params.slug),
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
// == Export
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recipe);
