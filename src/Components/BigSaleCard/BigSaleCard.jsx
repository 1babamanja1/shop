import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getPokes } from '../../redux/pokemons/selectors';

const BigSaleCard = () => {
  const params = useParams();
  const name = (params.pokeName);

  const pokeListFromServer = useSelector(getPokes);
  const pokeData = pokeListFromServer.find((item) => item.name === name);

  return (
    <StyledCard>
      <Pic img={pokeData.pic} />
      {pokeData.name}
      {pokeData.type}
      {pokeData.details.weight}
    </StyledCard>
  );
};

export default BigSaleCard;

const StyledCard = styled.div`
  width: 900px;
  border: 1px solid red;
`;

const Pic = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
`;
