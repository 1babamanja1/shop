import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getPokes } from '../../redux/pokemons/selectors';
import Type from '../Type';

const BigSaleCard = () => {
  const pokeList = useSelector(getPokes);
  const { pokeName } = useParams();
  const pokeData = pokeList.find((item) => item.name === pokeName);
  return <BigCard type={pokeData.type} pic={pokeData.pic} name={pokeData.name} />;
};

const BigCard = ({ pic, type, name }) => (
  <StyledCard>
    Hi
    {/* <Pic img={pic} /> */}
    {/* <Body> */}
    {/*  {type.map((item) => Type(item, name))} */}
    {/*  {name} */}
    {/* </Body> */}
  </StyledCard>
);

BigCard.defaultProps = {
  name: '',
  pic: '',
  type: [],
};

BigCard.propTypes = {
  name: PropTypes.string,
  pic: PropTypes.string,
  type: PropTypes.arrayOf(PropTypes.string),
};

export default BigSaleCard;

const StyledCard = styled.div`
  width: 900px;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Pic = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid blue;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
`;
const Body = styled.div`
  border: 1px solid blue;
  width: 200px;
`;
