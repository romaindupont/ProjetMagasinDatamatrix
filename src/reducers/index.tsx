import { combineReducers } from 'redux';
import commande from './commande';
import flash from './flash';
import moq from './moq';
import ai from './ai';

const rootReducer = combineReducers({
  commande,
  flash,
  moq,
  ai,
});

export default rootReducer;
