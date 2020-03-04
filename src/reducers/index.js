import { combineReducers } from 'redux';
import recipes from './recipes';

/*
  combineReducers combine nos reducers
  on fournit en argument un objet avec en clé le nom d'un "sous-state" et en valeur un reducer pour le faire évoluer
  on récupère en retour un méga-reducer qui est la combinaison des autres
*/

export default combineReducers({
  recipes,
});
