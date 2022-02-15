import { ReactNode } from 'react';
import { PokemonProps } from '../../types';
import * as S from './styles';

type PokemonModalProps = {
  setIsModalVisible: (value: boolean) => void;
  setModalData: (value: PokemonProps | undefined) => void;
  children: ReactNode;
};

export function PokemonModal({ setIsModalVisible, setModalData, children }: PokemonModalProps) {
  const closeModal = () => {
    setIsModalVisible(false);
    setModalData(undefined);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOutsideClick = (e: any) => {
    if (e.target.id === 'modal') closeModal();
  };

  return (
    <S.PokemonModal id="modal" onClick={handleOutsideClick}>
      <S.ModalContainer>
        <S.ModalCloseBtn type="button" onClick={closeModal}>
          Close
        </S.ModalCloseBtn>
        {children}
      </S.ModalContainer>
    </S.PokemonModal>
  );
}
