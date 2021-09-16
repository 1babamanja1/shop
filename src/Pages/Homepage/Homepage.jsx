import { FormattedMessage, useIntl } from 'react-intl';
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import pokeList from '../../pokeList.json';
import SaleCard from '../../Components/SaleCard';
import Header from '../../Components/Header';

const Homepage = () => {
  const { formatMessage } = useIntl();
  // get poke list from server
  const pokeListFromServer = pokeList;

  // useselector getPokeList

  return (
    <StyledHomePage>
      {/* move header to App component */}
      <Header />
      {/* <FormattedMessage id="hiMess" defaultMessage="Hello With Error" /> */}
      <p>{formatMessage({ id: 'hiMess' })}</p>

      {pokeListFromServer.map((pokemon) => (
        <SaleCard
          key={pokemon.id}
          name={pokemon.name}
          pic={pokemon.pic}
          details={pokemon.details}
        />
      ))}
    </StyledHomePage>
  );
};

export default withRouter(Homepage);

const StyledHomePage = styled.div`
  display: flex;
`;
