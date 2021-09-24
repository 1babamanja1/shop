import pokeList from '../../pokeList.json';
import httpCore from '../httpCore';

const getPokemon = () => {
  const endpoint = httpCore.createFetch({
    url: '/pokemons',
    method: 'GET',
  });
  let pokes = endpoint();
  pokes = pokeList;
  return pokes;
};

export default getPokemon;
