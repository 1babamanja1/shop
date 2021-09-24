import {
  combineReducers, createStore, compose, applyMiddleware,
} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import userReducer from './user/reducers';
import themeReducer from './common/theme/reducers';
import commonReducer from './common/dataLoading/reducers';
import { sagaWatcher } from './sagas';
import cartReducer from './cart/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleWare();

const store = createStore(
  combineReducers({
    userReducer,
    themeReducer,
    commonReducer,
    cartReducer,
  }),
  composeEnhancers(applyMiddleware(saga)),
);

export const state = store.getState();

saga.run(sagaWatcher);

export default store;
