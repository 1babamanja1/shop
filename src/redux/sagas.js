import {
  takeEvery, call, put, select,
} from 'redux-saga/effects';
import getPokemon from '../services/api/pokemons';

import {
  failLoading,
  getPokeList, startLoading, succeedLoading, updatePokeList,
} from './pokemons/actions';
import { saveToLocalStorage, saveToSessionStorage } from '../services/localStorage';
import { setAuthorized, setUnauthorized } from './user/actions';
import { addToCart, clearCart, removeFromCart } from './cart/actions';
import { getCart, getCartCounter } from './cart/selectors';

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
  yield saveToLocalStorage('isAuth', true);
}
export function* setUnauthToLocalStorage() {
  yield saveToLocalStorage('isAuth', false);
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
