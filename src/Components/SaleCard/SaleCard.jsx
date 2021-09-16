import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SaleCard = ({ name, pic, details }) => (

  <StyledSaleCard>
    <Name><Link to={`/pokemons/${name.toLowerCase()}`}>{name}</Link></Name>
    <Body>
      <Link to={`/pokemons/${name.toLowerCase()}`}>
        <Pic img={pic} />
      </Link>
      <Info>
        <span>
          Weight:
          {details.weight}
        </span>
        <span>
          Height:
          {details.height}
        </span>
        <span>
          Category:
          {details.category}
        </span>

      </Info>
    </Body>
  </StyledSaleCard>
);

SaleCard.defaultProps = {
  name: '',
  pic: '',
  details: {},
};

SaleCard.propTypes = {
  name: PropTypes.string,
  pic: PropTypes.string,
  details: PropTypes.objectOf(PropTypes.any),
};

export default SaleCard;

const StyledSaleCard = styled.div`
  min-width: 300px;
  height: 200px;
  width: 25%;
  border: 1px solid green;
  margin: 5px;
`;

const Pic = styled.div`
  width: 170px;
  height: 170px ;
  background-image: url(${(props) => props.img});
  background-color: lightcyan;
  background-position: center;
  background-size: contain;
`;

const Name = styled.div`
  & *{
  text-decoration: none;
  color: ${(props) => props.theme.color};}
`;
const Body = styled.div`
display: flex;
justify-content: space-around;
`;

const Info = styled.div`
display: flex;
  flex-direction: column;
`;
