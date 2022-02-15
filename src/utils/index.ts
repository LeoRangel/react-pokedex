export function addZerosToId(idPokemon: number) {
  return idPokemon.toString().padStart(3, '0');
}

export function formatTextToCapitalize(value: string) {
  const text = value
    .toLocaleLowerCase()
    .split(' ')
    .map((l) => l.charAt(0).toUpperCase() + l.substring(1))
    .join(' ');

  return text;
}

export function formatTextToCapitalizeWithTrace(value: string) {
  const text = value
    .toLocaleLowerCase()
    .split('-')
    .map((l) => l.charAt(0).toUpperCase() + l.substring(1))
    .join(' ');

  return text;
}

export const pokemonColors: { [key: string]: string } = {
  normal: '#A8A77A',
  fighting: '#C22E28',
  flying: '#A98FF3',
  poison: '#A33EA1',
  ground: '#E2BF65',
  rock: '#B6A136',
  bug: '#A6B91A',
  ghost: '#735797',
  steel: '#B7B7CE',
  fire: '#EE8130',
  water: '#6390F0',
  grass: '#7AC74C',
  electric: '#F7D02C',
  psychic: '#F95587',
  ice: '#96D9D6',
  dragon: '#6F35FC',
  dark: '#705746',
  fairy: '#D685AD',
};
