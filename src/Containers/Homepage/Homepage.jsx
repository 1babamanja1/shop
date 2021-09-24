import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

import SaleCard from '../../Components/SaleCard';
import { getPokes } from '../../redux/common/dataLoading/selectors';

const Homepage = () => {
  const { formatMessage } = useIntl();
  const pokeListFromServer = useSelector(getPokes);
  if (!pokeListFromServer) {
    return null;
  }
  return (
    <Grid container spacing={1}>
      {pokeListFromServer.map((pokemon) => (
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12} key={`grid_${pokemon.id}`}>
          <SaleCard
            key={`card_${pokemon.id}`}
            name={formatMessage({ id: pokemon.name })}
            pic={pokemon.pic}
            type={pokemon.type}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Homepage;
