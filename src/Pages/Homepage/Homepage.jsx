import { FormattedMessage } from 'react-intl';
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import pokeList from '../../pokeList.json';
import SaleCard from '../../Components/SaleCard';
import Header from '../../Components/Header';

const Homepage = () => (
  <StyledHomePage>
    <Header />
    <FormattedMessage id="hiMess" defaultMessage="Hello With Error" />
    {pokeList.map((pokemon) => (
      <SaleCard
        key={pokemon.id}
        name={pokemon.name}
        pic={pokemon.pic}
        details={pokemon.details}
      />
    ))}
  </StyledHomePage>
);
export default withRouter(Homepage);

const StyledHomePage = styled.div`
  display: flex;
`;
