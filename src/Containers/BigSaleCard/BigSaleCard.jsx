import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getFullInfoSelector } from '../../redux/pokemons/selectors';
import { clearFullInfo, getFullInfo } from '../../redux/pokemons/actions';
import { addToCart } from '../../redux/cart/actions';

import Type from '../../Components/Type';
import Button from '../../Components/Button';
import { Colors } from '../../Theme/theme';

const BigSaleCard = () => {
  const dispatch = useDispatch();
  const { pokeName } = useParams();

  useEffect(() => {
    dispatch(clearFullInfo());
    dispatch(getFullInfo(pokeName));
  }, [dispatch, pokeName]);

  const pokeData = useSelector(getFullInfoSelector);
  const clickHandler = () => { dispatch(addToCart(pokeData)); };

  if (Object.keys(pokeData).length === 0) {
    return null;
  }
  return (
    <StyledCard>
      <div>
        <Pic img={pokeData.pic} />
      </div>
      <Body>
        <Header>{pokeData.name}</Header>
        <Info>
          <h4>Weight:</h4>
          <span>{pokeData.details.weight}</span>
        </Info>
        <Info>
          <h4>Height:</h4>
          <span>{pokeData.details.height}</span>
        </Info>
        <Info>
          <h4>Category:</h4>
          <span>{pokeData.details.category}</span>
        </Info>
        <Info>
          <h4>Type:</h4>
          {pokeData.type.map((item) => <Type pokeType={item} pokeName={pokeData.name} key={`${item}_${pokeData.name}`} />)}
        </Info>
        <Info>
          <h4>Weakness:</h4>
          {pokeData.details.weakness.map((item) => <Type pokeType={item} pokeName={pokeData.name} key={`${item}_${pokeData.name}`} />)}
        </Info>
        <Button buttonName="Add to Cart" onClick={clickHandler} />
      </Body>
    </StyledCard>
  );
};

export default BigSaleCard;

const StyledCard = styled.div`
  width: 900px;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Header = styled.h2`
  color: ${Colors('orange')}
  text-decoration: none;
`;
const Pic = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
`;
const Body = styled.div`
  min-width: 200px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  & *{
    margin-right: 7px;
  }
`;
