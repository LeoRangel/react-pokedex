import * as S from './styles';
import cutPokeball from '../../assets/img/cut-pokeball.png';
import { PokemonCardProps, PokemonTypeProps } from '../../types';

export function PokemonCard({ id, name, types, image }: PokemonCardProps) {
  function addZerosToId(idPokemon: number) {
    if (idPokemon <= 9) {
      return `#00${idPokemon}`;
    }
    if (idPokemon > 9 && idPokemon <= 99) {
      return `#0${idPokemon}`;
    }
    return `#${idPokemon}`;
  }

  return (
    <S.PokemonCard mainType={types[0].type.name}>
      <img src={cutPokeball} alt="" />
      <img src={image} alt={name} />
      <S.PokemonCardBody>
        <small>{addZerosToId(id)}</small>
        <h2>{name}</h2>
        <div>
          {types.map((item: PokemonTypeProps) => (
            <S.PokemonBadgeType key={item.slot}>{item.type.name}</S.PokemonBadgeType>
          ))}
        </div>
      </S.PokemonCardBody>
    </S.PokemonCard>
  );
}
