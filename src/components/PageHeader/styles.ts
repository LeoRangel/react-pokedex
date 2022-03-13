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
  padding: var(--spacing-6) 0 calc(var(--spacing-6) + 90px) 0;
  background: var(--gray-4);

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchInput = styled.div`
  width: fit-content;
  min-width: 45%;
  max-width: 100%;
  position: relative;

  input[type='search'] {
    width: 100%;
    border: none;
    border-radius: var(--border-radius-1);
    background-color: var(--gray-5);
    padding: var(--spacing-4) var(--spacing-5);
    font-size: 1rem;
    color: var(--gray-1);

    ::placeholder {
      color: var(--gray-2);
    }

    ::-webkit-search-cancel-button {
      display: none;
    }
  }

  span {
    position: absolute;
    top: 50%;
    right: var(--spacing-4);
    transform: translateY(-50%);

    svg {
      fill: var(--gray-2);
    }
  }
`;
