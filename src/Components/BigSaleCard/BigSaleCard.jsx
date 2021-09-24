import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getPokes } from '../../redux/pokemons/selectors';
import Type from '../Type';
import Button from '../Button';
import { addToCart } from '../../redux/cart/actions';

const BigSaleCard = () => {
  const pokeList = useSelector(getPokes);
  const { pokeName } = useParams();
  const pokeData = pokeList.find((item) => item.name === pokeName);
  const dispatch = useDispatch();
  return (
    <StyledCard>
      {pokeData.name}
      <Pic img={pokeData.pic} />
      <Body>
        {pokeData.type}
        {pokeData.type.map((item) => Type(item, pokeData.name))}
        <Button buttonName="Add to Cart" onClick={() => dispatch(addToCart({ name: pokeData.name }))} />
      </Body>
    </StyledCard>
  );
};

export default BigSaleCard;

const StyledCard = styled.div`
  width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Pic = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
`;
const Body = styled.div`
  width: 200px;
`;
