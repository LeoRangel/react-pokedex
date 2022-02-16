const highestStats: { [key: string]: number } = {
  hp: 100 / 255,
  attack: 100 / 181,
  defense: 100 / 230,
  specialattack: 100 / 173, // 173 ou 180
  specialdefense: 100 / 230,
  speed: 100 / 200,
  // total: 100 / 720,
};

const pokemonColors: { [key: string]: string } = {
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
    .replace('special', 'sp.')
    .split('-')
    .map((l) => l.charAt(0).toUpperCase() + l.substring(1))
    .join(' ');

  return text;
}

export function getHighestStats(itemBaseStat: number, itemStateName: string) {
  return Math.round(itemBaseStat * highestStats[itemStateName.replace('-', '')]);
}

export function getPokemonBG(primaryType: string, secondaryType?: string) {
  if (primaryType && pokemonColors[primaryType]) {
    if (secondaryType && pokemonColors[secondaryType]) {
      return `background-image: linear-gradient(225deg, ${pokemonColors[primaryType]} 10%, ${pokemonColors[secondaryType]} 90%)`;
    }
    return `background-color: ${pokemonColors[primaryType]}`;
  }
  return 'background-color: var(--gray-3)';
}
