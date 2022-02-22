import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers';
import commandes from '../middlewares/commande';
import flash from 'middlewares/flash';
import moq from 'middlewares/moq';
import ai from 'middlewares/ai';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(commandes, flash, moq, ai),
));

export default store;
