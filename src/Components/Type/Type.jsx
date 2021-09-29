import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { typeColor } from '../../Theme/theme';

const Type = ({ pokeType }) => {
  if (pokeType) {
    return <PokeType type={pokeType}>{pokeType}</PokeType>;
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
`;

export default Type;
