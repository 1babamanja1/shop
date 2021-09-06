import { combineReducers, createStore, compose } from "redux";
import { reducer as formReducer } from "redux-form";

export const store = createStore(
  combineReducers({
    form: formReducer,
  })
);