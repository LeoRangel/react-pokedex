import styled from 'styled-components';

export const PokemonList = styled.div`
  margin-bottom: var(--spacing-6);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-4);

  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 370px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
