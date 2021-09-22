import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';

import SaleCard from '../../Components/SaleCard';
import { getPokes } from '../../redux/pokemons/selectors';
import { getPokeListFromServer } from '../../redux/pokemons/actions';

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getPokeListFromServer()); }, [dispatch]);

  const { formatMessage } = useIntl();
  const pokeListFromServer = useSelector(getPokes);

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

export default withRouter(Homepage);
