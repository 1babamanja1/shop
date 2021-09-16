import { combineReducers, createStore, compose } from 'redux';
import { userReducer } from './user/user-reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    userReducer,
  }),
  composeEnhancers(),
);
export const state = store.getState();

export default store;
