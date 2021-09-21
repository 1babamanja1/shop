import pokeList from '../../pokeList.json';
import httpCore from '../httpCore';

export const getPokemon = () => {
  const endpoint = httpCore.createFetch({
    url: '/pokemons',
    method: 'GET',
  });
  const pokes = pokeList;
  return pokes;
};
