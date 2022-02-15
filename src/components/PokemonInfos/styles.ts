import styled from 'styled-components';
import { pokemonColors } from '../../utils';

export const PokemonInfos = styled.div<{ mainType: string }>`
  display: flex;
  flex-direction: column;
  ${({ mainType }) => {
    if (mainType && pokemonColors[mainType]) {
      return `background-color: ${pokemonColors[mainType]}`;
    }
    return 'background-color: var(--gray-3)';
  }};
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
      transform: translateX(50%);
      // width: auto;
      // right: var(--spacing-4);
      z-index: 99;
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
  display: flex;
  flex-direction: column;
  padding: var(--spacing-5);
  padding-top: var(--spacing-6);
  background: var(--gray-5);
  border-radius: var(--border-radius-3) var(--border-radius-3) 0 0;
  z-index: 98;

  table {
    td {
      &:nth-child(3) {
        width: 50%;
      }
    }
  }
`;

export const PorgessBar = styled.span<{ value: number; mainType: string }>`
  border-radius: 50%;
  overflow: hidden;
  width: 100%;

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
      ${({ mainType }) => (mainType ? `background: ${pokemonColors[mainType]}` : 'background: var(--gray-3)')};
      ${({ value }) => (value ? `width: ${value}%` : 'width: 0')};
    }
  }
`;
