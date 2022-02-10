import * as S from './styles';
import cutPokeball from '../../assets/img/cut-pokeball.png';
import { PokemonCardProps, PokemonTypeProps } from '../../types';

export function PokemonCard({ id, name, types, image }: PokemonCardProps) {
  function addZerosToId(idPokemon: number) {
    return idPokemon.toString().padStart(3, '0');
  }

  return (
    <S.PokemonCard className="animated fadeInLeft" mainType={types[0].type.name}>
      <img src={cutPokeball} alt="" />
      <img src={image} alt={name} />
      <S.PokemonCardBody>
        <small>
          <code>#{addZerosToId(id)}</code>
        </small>
        <h2 title={name}>{name}</h2>
        <div>
          {types.map((item: PokemonTypeProps) => (
            <S.PokemonBadgeType key={item.slot}>{item.type.name}</S.PokemonBadgeType>
          ))}
        </div>
      </S.PokemonCardBody>
    </S.PokemonCard>
  );
}
