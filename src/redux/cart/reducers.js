import { getFromSessionStorage } from '../../services/localStorage';

const defaultState = {
  cart: getFromSessionStorage('cart') || [],
  cartCounter: getFromSessionStorage('cartCounter') || 0,
};

function cartReducer(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartCounter: state.cartCounter + 1,
      };
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cart: [...state.cart.filter((item) => item !== action.payload)],
        cartCounter: state.cartCounter - 1,
      };
    }
    case 'CLEAR_CART': {
      return {
        ...state,
        cart: [],
        cartCounter: 0,
      };
    }
    default: return state;
  }
}

export default cartReducer;
