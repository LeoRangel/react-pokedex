import styled, { css } from 'styled-components';

export const ToggleThemeButton = styled.button`
  cursor: pointer;
  height: 40px;
  width: 70px;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 20px;
  background: var(--gray-4);

  display: flex;
  align-items: center;
  transition: all linear 0.3s;
  position: relative;

  transition: var(--bg-transition);

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;

    position: absolute;
    transition: all linear 0.3s;
    left: 5px;

    img {
      position: absolute;
    }
  }

  ${({ theme }) => css`
    ${theme === 'dark' &&
    css`
      background: var(--primary-color);
      background-size: 200% auto;

      span {
        left: 32px;
      }

      &:not(:disabled):hover {
        background-position: right center;
      }
    `};
  `};
`;
