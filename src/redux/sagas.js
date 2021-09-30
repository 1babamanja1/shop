import {
  takeEvery, call, put, select,
} from 'redux-saga/effects';
import { getPokemon, getFullPokeData } from '../services/api/pokemons';

import {
  updatePokeList, updateFullInfo, startPokeLoading, failPokeLoading, succeedPokeLoading,
} from './pokemons/actions';
import { saveToLocalStorage, saveToSessionStorage } from '../services/localStorage';
import { setAuthorized, setUnauthorized } from './user/actions';
import { getCart, getCartCounter } from './cart/selectors';
import getAuthorized from './user/selectors';
import { failLoading, startLoading, succeedLoading } from './common/actions';
import pokeType from './pokemons/consts';
import cartType from './cart/consts';
import commonType from './common/consts';
import { getCurrentTheme } from './common/selectors';

export function* getPokemons() {
  yield put(startLoading());
  try {
    const payload = yield call(getPokemon);
    yield put(updatePokeList(payload));
    yield put(succeedLoading());
  } catch (e) {
    yield put(failLoading());
  }
}
export function* getFull(data) {
  yield put(startPokeLoading());
  try {
    const payload = yield call(getFullPokeData, data.payload);
    yield put(updateFullInfo(payload));
    yield put(succeedPokeLoading());
  } catch (e) {
    yield put(failPokeLoading());
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

export function* saveThemeToLocalStorage() {
  const theme = yield select(getCurrentTheme);
  yield saveToLocalStorage('theme', theme);
}

export function* sagaWatcher() {
  yield takeEvery(pokeType.getPokelist, getPokemons);
  yield takeEvery(pokeType.getFullPokeInfo, getFull);

  yield takeEvery(setAuthorized().type, setAuthToLocalStorage);
  yield takeEvery(setUnauthorized().type, setAuthToLocalStorage);

  yield takeEvery(cartType.addToCart, saveCartToSessionStorage);
  yield takeEvery(cartType.removeOneFromCart, saveCartToSessionStorage);
  yield takeEvery(cartType.removeAllFromCart, saveCartToSessionStorage);
  yield takeEvery(cartType.clearCart, saveCartToSessionStorage);

  yield takeEvery(commonType.changeTheme, saveThemeToLocalStorage);
}
