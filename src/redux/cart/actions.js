import cartType from './consts';

export const addToCart = (payload) => ({
  type: cartType.addToCart,
  payload,
});

export const removeOneFromCart = (payload) => ({
  type: cartType.removeOneFromCart,
  payload,
});

export const removeAllFromCart = (payload) => ({
  type: cartType.removeAllFromCart,
  payload,
});

export const clearCart = () => ({
  type: cartType.clearCart,
});
