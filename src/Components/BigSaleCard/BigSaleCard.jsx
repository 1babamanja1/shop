import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import Type from '../Type';
import Button from '../Button';
import { addToCart } from '../../redux/cart/actions';

const BigSaleCard = ({ name, pic, type }) => {
  const dispatch = useDispatch;
  const clickHandler = () => dispatch(addToCart({ name }));

  return (
    <StyledCard>
      {name}
      <Pic img={pic} />
      <Body>
        {type.map((item) => Type(item, name))}
        <Button buttonName="Add to Cart" onClick={clickHandler} />
      </Body>
    </StyledCard>
  );
};

export default BigSaleCard;

BigSaleCard.defaultProps = {
  name: '',
  pic: '',
  type: [],
  details: {
    height: 0,
    weight: 0,
    category: '',
  },
};

BigSaleCard.propTypes = {
  name: PropTypes.string,
  pic: PropTypes.string,
  type: PropTypes.arrayOf(PropTypes.string),
  details: PropTypes.shape({
    height: PropTypes.number,
    weight: PropTypes.number,
    category: PropTypes.string,
  }),
};

const StyledCard = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
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
