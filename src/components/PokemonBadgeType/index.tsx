import { ReactNode } from 'react';
import * as S from './styles';

type PokemonBadgeTypeProps = {
  children: ReactNode;
};

export function PokemonBadgeType({ children }: PokemonBadgeTypeProps) {
  return <S.PokemonBadgeType>{children}</S.PokemonBadgeType>;
}
