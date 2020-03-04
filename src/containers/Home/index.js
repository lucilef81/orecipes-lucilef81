// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Home from 'src/components/Home';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  recipes: state.recipes.list,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
// == Export
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
