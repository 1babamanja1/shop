import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../redux/cart/selectors';
import { removeFromCart } from '../../redux/cart/actions';

const Cart = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  return (
    <div>
      {cart.map((item) => (
        <div>
          {item.name}
          <button type="button" onClick={() => dispatch(removeFromCart(item))}> Remove from cart </button>
          <div />
        </div>
      ))}
    </div>
  );
};

export default Cart;
