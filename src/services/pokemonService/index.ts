import axios from 'axios';

const url = process.env.REACT_APP_POKEMON_API;

export const pokeapi = axios.create({
  baseURL: url,
});

// export const getPokemon = () => {
//   return fetch(`${url}/pokemon/`)
//     .then((res) => res.json())
//     .then((json) => json)
//     .catch((err) => console.error(`Error Reading data: ${err}`));
// };

// export const getPokemonInfos = (pokemonName: string) => {
//   return fetch(`${url}/pokemon/${pokemonName}/`)
//     .then((res) => res.json())
//     .then((json) => json)
//     .catch((err) => console.error(`Error Reading data: ${err}`));
// };
