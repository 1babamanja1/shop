import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Type from '../Type';

const SaleCard = ({ name, pic, type }) => (
  <StyledSaleCard>
    <div>
      <Name><Link to={`/pokemons/${name}`}>{name}</Link></Name>
      <Link to={`/pokemons/${name}`}>
        <Pic img={`/${pic}`} />
      </Link>
    </div>
    <div>
      <h4>Type:</h4>
      {type.map((item) => Type(item, name))}

    </div>
  </StyledSaleCard>
);

SaleCard.defaultProps = {
  name: '',
  pic: '',
  type: [],
  details: {
    height: 0,
    weight: 0,
    category: '',
  },
};

SaleCard.propTypes = {
  name: PropTypes.string,
  pic: PropTypes.string,
  type: PropTypes.arrayOf(PropTypes.string),
  details: PropTypes.shape({
    height: PropTypes.number,
    weight: PropTypes.number,
    category: PropTypes.string,
  }),
};

export default SaleCard;

const StyledSaleCard = styled.div`
  height: 350px;
  padding: 5px 10px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  border: 3px solid #535B6C;
  border-radius: 10px;
  
  @media (max-width: 599px) {
    flex-direction: row;
    justify-content: space-around;
    height: 250px;
  }
  & *{
    color: ${(props) => props.theme.color};
  }
`;

const Pic = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
`;

const Name = styled.h2`
  & * {
    text-decoration: none;
  }
`;
