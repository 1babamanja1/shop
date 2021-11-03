// import pokeList from '../../pokeList.json';
import httpCore from '../httpCore';

const delay = (del) => new Promise((resolve) => setTimeout(() => resolve(true), del));

export const getPokemon = () => delay(1000).then(() => {
  const endpoint = httpCore.createFetch({
    url: '/api/pokemon-list',
    method: 'GET',
  });
  return endpoint().then((res) => res.data);
});

export const getFullPokeData = (id) => delay(1000).then(() => {
  const endpoint = httpCore.createFetch({
    url: `/api/pokemons${id}`,
    method: 'GET',
  });
  return endpoint().then((res) => res.data);
});
