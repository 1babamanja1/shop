import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCart } from '../../redux/cart/selectors';
import { removeFromCart } from '../../redux/cart/actions';

const Cart = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const FullCart = () => (
    <StyledCart>
      {cart.map((item) => (
        <div key={Math.random().toString(36).substring(5)}>
          {item.name}
          <button type="button" onClick={() => dispatch(removeFromCart(item))}> Remove from cart </button>
          <div />
        </div>
      ))}
    </StyledCart>
  );

  const EmptyCart = () => <div>The cart is empty now</div>;

  return (cart && cart.length > 0) ? <FullCart /> : <EmptyCart />;
};
export default Cart;
const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  & *{
    margin: 2px auto;
  }
`;
