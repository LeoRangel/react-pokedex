import styled from 'styled-components';

export const Pagination = styled.ul`
  list-style: none;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
`;

export const PaginationButton = styled.button<{ active?: boolean }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  position: relative;
  border: 1px solid;
  ${({ active }) => {
    if (active === true) {
      return `
      color: white;
      background-color: var(--primary-color);
      border-color: var(--primary-color);
      `;
    }
    return `
      color: var(--gray-1);
      background-color: transparent;
      border-color: var(--gray-2);
      cursor: pointer;

      :hover {
        background-color: var(--gray-4);
      }
    `;
  }};

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
