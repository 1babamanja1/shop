import pokeList from '../../pokeList.json';
import httpCore from '../httpCore';

const delay = (del) => new Promise((resolve) => setTimeout(() => resolve(true), del));

export const getPokemon = () => delay(1000).then(() => {
  const endpoint = httpCore.createFetch({
    url: '/pokemons',
    method: 'GET',
  });
  let pokes = endpoint();
  pokes = pokeList;
  return pokes;
});

export const getFullPokeData = (name) => delay(1000).then(() => {
  const endpoint = httpCore.createFetch({
    url: '/pokemons',
    method: 'GET',
  });
  let pokes = endpoint();
  pokes = pokeList;
  const index = pokes.findIndex((item) => item.name === name);
  return pokes[index];
});

export default getPokemon;
