import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Type = ({ pokeType }) => {
  if (pokeType) {
    return <PokeType type={pokeType}>{pokeType}</PokeType>;
  }
  return <PokeType type="unknown" />;
};

const setColor = (type) => {
  switch (type) {
    case 'Bug':
      return '#1CFF14';
    case 'Dark':
      return '#006262';
    case 'Dragon':
      return '#EB4C42';
    case 'Electric':
      return '#F4CA16';
    case 'Fairy':
      return '#F4A6D1';
    case 'Fighting':
      return '#9457EB';
    case 'Fire':
      return '#FF5107';
    case 'Flying':
      return '#C2FFFA';
    case 'Ghost':
      return '#DDDDE1';
    case 'Grass':
      return '#0F7E00';
    case 'Ground':
      return '#7E4B2A';
    case 'Ice':
      return '#19E7E7';
    case 'Normal':
      return '#838996';
    case 'Psychic':
      return '#BFDE68';
    case 'Poison':
      return '#00DE94';
    case 'Steel':
      return '#BBBBBB';
    case 'Rock':
      return '#8F8F8F';
    case 'Water':
      return '#0800EE';
    default:
      return '#000';
  }
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
  border: 3px solid ${(props) => setColor(props.type)};
  border-radius: 5px;
`;

export default Type;
