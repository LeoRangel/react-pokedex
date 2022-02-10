import styled from 'styled-components';

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

export const PokemonCard = styled.div<{ mainType: string }>`
  width: 100%;
  max-width: 100%;
  height: 180px;
  padding: var(--spacing-4);
  ${({ mainType }) => {
    if (mainType && pokemonColors[mainType]) {
      return `background-color: ${pokemonColors[mainType]}`;
    }
    return 'background-color: var(--gray-3)';
  }};
  border-radius: var(--border-radius-1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  color: white;

  small {
    color: rgba(0, 0, 0, 0.4);
    font-weight: 600;
  }

  h2 {
    max-width: 100%;
    text-transform: capitalize;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-shadow: 0 0.015rem 0.35rem rgba(0, 0, 0, 0.3);
  }

  img {
    width: 96px;
    height: auto;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const PokemonCardBody = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--spacing-4);
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;

  div {
    margin-top: var(--spacing-3);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }
`;

export const PokemonBadgeType = styled.small`
  width: fit-content;
  padding: var(--spacing-1) var(--spacing-2);
  color: white !important;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: var(--border-radius-1);
  text-transform: capitalize;
`;
