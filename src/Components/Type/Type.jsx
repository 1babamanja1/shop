import React from 'react';
import styled from 'styled-components';

const Type = (pokeType, pokeName) => {
  if (pokeType) {
    return <PokeType props={pokeType} key={`${pokeName}_${pokeType}`}>{pokeType}</PokeType>;
  }
  return <PokeType props="unknown" />;
};

const setColor = (type) => {
  switch (type.props) {
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

const PokeType = styled.div`
  width: 100px;
  margin: 5px auto;
  padding: 2px;
  text-align: center;
  color: ${(props) => setColor(props)};
  border: 2px solid ${(props) => setColor(props)};
  border-radius: 5px;
`;

export default Type;
