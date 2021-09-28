export const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload,
});

export const removeOneFromCart = (payload) => ({
  type: 'REMOVE_ONE_FROM_CART',
  payload,
});

export const removeAllFromCart = (payload) => ({
  type: 'REMOVE_ALL_FROM_CART',
  payload,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
