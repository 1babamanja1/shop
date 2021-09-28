import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

import SaleCard from '../../Components/SaleCard';
import { getPokes } from '../../redux/pokemons/selectors';

const Homepage = () => {
  const pokeList = useSelector(getPokes);
  if (!pokeList) {
    return null;
  }
  return (
    <Grid container spacing={1}>
      {pokeList.map((pokemon) => (
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12} key={`grid_${pokemon.id}`}>
          <SaleCard data={pokemon} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Homepage;
