// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Recipe from 'src/components/Recipe';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  recipe: state.recipes.list[0],
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
// == Export
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recipe);
