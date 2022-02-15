import styled from 'styled-components';
import { pokemonColors } from '../../utils';

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

    &.pokemon-image {
      bottom: var(--spacing-1);
      right: var(--spacing-1);
    }
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
