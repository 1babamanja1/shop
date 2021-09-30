import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getCart, getCartCounter } from '../../redux/cart/selectors';
import { clearCart, removeAllFromCart, removeOneFromCart } from '../../redux/cart/actions';

import Button from '../../Components/Button';
import { colors } from '../../Theme/theme';

const Cart = () => {
  const cart = useSelector(getCart);
  const cartCounter = useSelector(getCartCounter);

  const dispatch = useDispatch();
  const removeOne = (item) => dispatch(removeOneFromCart(item));
  const removeAll = (item) => dispatch(removeAllFromCart(item));
  const clearAll = () => dispatch(clearCart());

  return (cart?.length > 0)
    ? (
      <Container>
        <Header>
          <Button type="button" buttonName="Clear cart" onClick={clearAll} />
          <h3>
            Total Pokemons:
            {cartCounter}
          </h3>
        </Header>
        <StyledCart>
          {cart.map((item) => (
            <Item key={`cart_${item.data.name}`}>
              <div>
                <Link to={`/pokemons/${item.data.name}`}><Pic img={item.data.pic} /></Link>
              </div>
              <Body>
                <Link to={`/pokemons/${item.data.name}`}>
                  <Name>
                    {item.data.name}
                    {' '}
                    x
                    {item.count}
                  </Name>
                </Link>
                <div>
                  <Button type="button" buttonName="Remove one" onClick={() => removeOne(item.data.name)} />
                  <Button type="button" buttonName="Remove All" onClick={() => removeAll(item.data.name)} />
                </div>
              </Body>
            </Item>
          ))}
        </StyledCart>
      </Container>
    )
    : <div>The cart is empty now</div>;
};
export default Cart;

const Container = styled.div`
  width: 100%;
`;

const StyledCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & *{
    display: flex;
    margin: 2px auto;
  }
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-around;
  & *{
    margin: 5px
  }
`;

const Item = styled.div`
  width: 50%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid ${colors.orange};
  & *{
    flex-direction: column;
    margin: 2px;
}
`;

const Name = styled.h2`
  color: ${(props) => props.theme.color};
`;

const Body = styled.div`
  justify-content: space-around;
  align-items: flex-end;
  & *{
    text-decoration: none;
  }
`;

const Pic = styled.div`
  width: 120px;
  height: 120px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
`;
