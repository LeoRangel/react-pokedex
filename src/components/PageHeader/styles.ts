import styled from 'styled-components';

export const PageHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Navbar = styled.nav`
  width: 100%;
  background-color: var(--gray-5);
  border-bottom: 1px solid var(--gray-4);
  padding: var(--spacing-3);

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--spacing-5);
  }
`;

export const PokemonSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-6) 0;

  input {
    border: none;
    border-radius: var(--border-radius-1);
    background-color: var(--gray-4);
    padding: var(--spacing-4) var(--spacing-5);
    font-size: 1rem;

    ::placeholder {
      color: var(--gray-2);
    }
  }
`;
