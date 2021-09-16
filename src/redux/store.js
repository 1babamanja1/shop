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
store.subscribe(() => {
  console.log('state changed');
  console.log(state.userReducer);
});

export default store;
