import styled from 'styled-components';

export const PokemonInfos = styled.div<{ pokemonBG: string }>`
  display: flex;
  flex-direction: column;
  ${({ pokemonBG }) => pokemonBG || ''};
`;

export const PokemonInfosHeader = styled.header`
  min-height: 200px;
  padding: var(--spacing-5);
  color: white;
  border-radius: var(--border-radius-1) var(--border-radius-1) 0 0;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  img {
    position: absolute;
    right: 50%;
    width: auto;

    &.pokebola-spinner {
      bottom: -30%;
      height: 100%;
      z-index: 97;

      @keyframes pokebolaSpinner {
        0% {
          transform: translateX(50%) rotate(0);
        }
        100% {
          transform: translateX(50%) rotate(360deg);
        }
      }
      animation: pokebolaSpinner 5s linear infinite;
    }

    &.pokemon-image {
      bottom: -20%;
      height: 80%;
      // width: auto;
      // right: var(--spacing-4);
      z-index: 99;

      @keyframes pokemonImage {
        0% {
          opacity: 0;
          transform: translateX(50%) scale(0);
        }
        100% {
          opacity: 1;
          transform: translateX(50%) scale(1);
        }
      }
      animation: pokemonImage 0.2s both;
    }
  }

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

  div {
    margin-top: var(--spacing-3);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }
`;

export const PokemonInfosContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-2) var(--spacing-5);
  padding: var(--spacing-5);
  padding-top: var(--spacing-6);
  background: var(--gray-5);
  border-radius: var(--border-radius-3) var(--border-radius-3) 0 0;
  z-index: 98;

  p {
    margin-bottom: var(--spacing-2);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StatsBar = styled.span<{ value: number; pokemonBG: string }>`
  width: 100%;
  border-radius: 50%;
  overflow: hidden;

  span {
    display: block;
    height: 10px;
    border-radius: var(--border-radius-1);
    overflow: hidden;

    &.bar {
      background: var(--gray-4);
    }

    &.progress {
      color: #fff;
      ${({ pokemonBG }) => pokemonBG || ''};
      ${({ value }) => (value ? `width: ${value}%` : 'width: 0')};
    }
  }
`;
