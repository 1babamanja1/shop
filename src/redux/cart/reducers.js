import { getFromSessionStorage } from '../../services/localStorage';
import cartType from './consts';

const defaultState = {
  cart: getFromSessionStorage('cart') || [],
  cartCounter: getFromSessionStorage('cartCounter') || 0,
};

function cartReducer(state = defaultState, action) {
  switch (action.type) {
    case cartType.addToCart: {
      const data = action.payload;
      const newCart = [...state.cart];
      const index = newCart.findIndex((item) => item.data.name === data.name);

      if (index === -1) {
        newCart.push({ data, count: 1 });
      } else newCart[index].count += 1;

      return {
        ...state,
        cart: newCart,
        cartCounter: state.cartCounter + 1,
      };
    }

    case cartType.removeOneFromCart: {
      const newCart = [...state.cart];
      const index = newCart.findIndex((item) => item.data.name === action.payload);

      if (newCart[index].count === 1) {
        newCart.splice(index, 1);
      } else {
        newCart[index].count -= 1;
      }
      return {
        ...state,
        cart: newCart,
        cartCounter: state.cartCounter - 1,
      };
    }
    case cartType.removeAllFromCart: {
      const countRes = state.cart.find((item) => item.data.name === action.payload).count;
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.data.name !== action.payload)],
        cartCounter: state.cartCounter - countRes,
      };
    }
    case cartType.clearCart: {
      return defaultState;
    }
    default:
      return state;
  }
}

export default cartReducer;
