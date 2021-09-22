import {
  combineReducers, createStore, compose, applyMiddleware,
} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import userReducer from './user/reducers';
import themeReducer from './theme/reducers';
import pokeReducer from './pokemons/reducers';
import { sagaWatcher } from './pokemons/sagas';
import { getAuthorized } from './user/selectors';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleWare();

// const currentState = getFromLocalStorage('authState');

const store = createStore(
  combineReducers({
    userReducer,
    themeReducer,
    pokeReducer,
  }),
  composeEnhancers(applyMiddleware(saga)),
);

// userReducer.subscribe(() => {
//   saveToLocalStorage('authState', getAuthorized());
// });

export const state = store.getState();

saga.run(sagaWatcher);

export default store;
