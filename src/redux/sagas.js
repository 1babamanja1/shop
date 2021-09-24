import {
  takeEvery, call, put, select,
} from 'redux-saga/effects';
import getPokemon from '../services/api/pokemons';

import {
  failLoading,
  getPokeList, startLoading, succeedLoading, updatePokeList,
} from './common/dataLoading/actions';
import { saveToLocalStorage, saveToSessionStorage } from '../services/localStorage';
import { setAuthorized, setUnauthorized } from './user/actions';
import { addToCart, clearCart, removeFromCart } from './cart/actions';
import { getCart, getCartCounter } from './cart/selectors';
import getAuthorized from './user/selectors';

const delay = (del) => new Promise((resolve) => setTimeout(() => resolve(true), del));

export function* getPokemons() {
  yield put(startLoading());
  try {
    yield call(delay, 1000);
    const payload = yield call(getPokemon);
    yield put(updatePokeList(payload));
    yield put(succeedLoading());
  } catch (e) {
    yield put(failLoading());
  }
}

export function* setAuthToLocalStorage() {
  const isAuth = yield select(getAuthorized);
  yield saveToLocalStorage('isAuth', isAuth);
}
export function* saveCartToSessionStorage() {
  const cart = yield select(getCart);
  const cartCounter = yield select(getCartCounter);
  yield saveToSessionStorage('cart', cart);
  yield saveToSessionStorage('cartCounter', cartCounter);
}

export function* sagaWatcher() {
  yield takeEvery(getPokeList().type, getPokemons);
  yield takeEvery(setAuthorized().type, setAuthToLocalStorage);
  yield takeEvery(setUnauthorized().type, setAuthToLocalStorage);

  yield takeEvery(addToCart().type, saveCartToSessionStorage);
  yield takeEvery(removeFromCart().type, saveCartToSessionStorage);
  yield takeEvery(clearCart().type, saveCartToSessionStorage);
}
