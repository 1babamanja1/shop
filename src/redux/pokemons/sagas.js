import { call, put } from 'redux-saga/effects';
import { getPokemon } from '../../services/api/pokemons';
import { updatePokeList } from './actions';

export function* sagaWorker() {
  const payload = yield call(getPokemon);
  yield put(updatePokeList(payload));
}

export function* sagaWatcher() {
  yield call(sagaWorker);
}
