import styled from 'styled-components';

export const PokemonModal = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 400px;
  min-height: 300px;
  background-color: var(--gray-4);
  color: var(--gray-1);
  position: relative;
  border-radius: var(--border-radius-1);
  overflow: hidden;
`;

export const ModalCloseBtn = styled.button`
  cursor: pointer;
  height: 40px;
  width: 70px;
  border: 1px solid white;
  color: white;
  border-radius: 20px;
  background: transparent;
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
  z-index: 199;
`;
