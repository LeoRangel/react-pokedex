import styled from 'styled-components';

export const PokemonCard = styled.div`
  width: 100%;
  max-width: 100%;
  height: 180px;
  padding: var(--spacing-4);
  background-color: var(--gray-3);
  border-radius: var(--border-radius-1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  color: white;

  small {
    color: rgba(0, 0, 0, 0.5);
  }

  h2 {
    max-width: 100%;
    text-transform: capitalize;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

  > div {
    margin-top: var(--spacing-3);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }
`;

export const PokemonCardType = styled.small`
  width: fit-content;
  padding: var(--spacing-1) var(--spacing-2);
  color: white !important;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: var(--border-radius-1);
  text-transform: capitalize;
`;
