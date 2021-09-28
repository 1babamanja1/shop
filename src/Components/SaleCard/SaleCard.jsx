import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Colors } from '../../Theme/theme';

import Type from '../Type';
import { addToCart } from '../../redux/cart/actions';

const SaleCard = ({ data }) => {
  const dispatch = useDispatch();
  const clickHandler = () => dispatch(addToCart(data));

  return (
    <StyledSaleCard>
      <div key={`saleCard_${data.name}`}>
        <Header>
          <Link to={`/pokemons/${data.name}`}><h3>{data.name}</h3></Link>
          <h3>
            <FontAwesomeIcon icon={faCartPlus} onClick={clickHandler} />
          </h3>
        </Header>
        <Link to={`/pokemons/${data.name}`}>
          <Pic img={data.pic} />
        </Link>
      </div>
      <div>
        <h4>Type:</h4>
        {data.type.map((item) => <Type pokeType={item} pokeName={data.name} key={`${item}_${data.name}`} />)}
      </div>
    </StyledSaleCard>
  );
};

SaleCard.defaultProps = {
  data: {
    name: '',
    pic: '',
    type: [],
    details: {
      height: 0,
      weight: 0,
      category: '',
    },
  },
};

SaleCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    pic: PropTypes.string,
    type: PropTypes.arrayOf(PropTypes.string),
    details: PropTypes.shape({
      height: PropTypes.number,
      weight: PropTypes.number,
      category: PropTypes.string,
    }),
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
    text-decoration: none;
  }
`;

const Pic = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & *{
    cursor: pointer;
    &:hover{
      color: ${Colors('orange')};
      transition: 0.3s;
    }
  }
  
`;
