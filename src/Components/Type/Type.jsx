import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { typeColor } from '../../Theme/theme';
import { filterType } from '../../redux/pokemons/actions';

const Type = ({ pokeType }) => {
  const dispatch = useDispatch();
  const typeClickHandler = (item) => dispatch(filterType(item));

  if (pokeType) {
    return (
      <PokeType type={pokeType} onClick={() => typeClickHandler(pokeType)}>
        <Link to="/home">{pokeType}</Link>
      </PokeType>
    );
  }
  return <PokeType type="Unknown">Unknown</PokeType>;
};

Type.defaultProps = {
  pokeType: '',
};

Type.propTypes = {
  pokeType: PropTypes.string,
};

const PokeType = styled.div`
  min-width: 70px;
  margin: 5px;
  padding: 2px;
  text-align: center;
  border: 3px solid ${(props) => typeColor[props.type]};
  border-radius: 5px;
  cursor: pointer;
  & * {
    text-decoration: none;
    color: inherit;
  }
  }
`;

export default Type;
