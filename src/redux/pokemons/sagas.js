import { takeEvery, call, put } from 'redux-saga/effects';
import { getPokemon } from '../../services/api/pokemons';
import { updatePokeList } from './actions';

export function* getPokemons() {
  const payload = yield call(getPokemon);
  yield put(updatePokeList(payload));
}

export function* sagaWatcher() {
  yield takeEvery('GET_POKELIST', getPokemons);
}
