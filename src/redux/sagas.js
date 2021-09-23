import { takeEvery, call, put } from 'redux-saga/effects';
import { getPokemon } from '../services/api/pokemons';
import { getPokeList, updatePokeList } from './pokemons/actions';
import { saveToLocalStorage } from '../services/localStorage';
import { setAuthorized, setUnauthorized } from './user/actions';

export function* getPokemons() {
  const payload = yield call(getPokemon);
  yield put(updatePokeList(payload));
}
export function* setAuthToLocalStorage() {
  yield saveToLocalStorage('isAuth', true);
}
export function* setUnauthToLocalStorage() {
  yield saveToLocalStorage('isAuth', false);
}

export function* sagaWatcher() {
  yield takeEvery(getPokeList().type, getPokemons);
  yield takeEvery(setAuthorized().type, setAuthToLocalStorage);
  yield takeEvery(setUnauthorized().type, setUnauthToLocalStorage);
}
