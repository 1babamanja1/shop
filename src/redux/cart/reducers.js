import { getFromSessionStorage } from '../../services/localStorage';

const defaultState = {
  cart: getFromSessionStorage('cart') || [],
  cartCounter: getFromSessionStorage('cartCounter') || 0,
};

function cartReducer(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const data = action.payload;
      const newCart = state.cart;
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

    case 'REMOVE_ONE_FROM_CART': {
      const newCart = state.cart;
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
    case 'REMOVE_ALL_FROM_CART': {
      const countRes = state.cart.find((item) => item.data.name === action.payload).count;
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.data.name !== action.payload)],
        cartCounter: state.cartCounter - countRes,
      };
    }
    case 'CLEAR_CART': {
      return {
        ...state,
        cart: [],
        cartCounter: 0,
      };
    }
    default:
      return state;
  }
}

export default cartReducer;
