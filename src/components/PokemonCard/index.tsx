import * as S from './styles';
import cutPokeball from '../../assets/img/cut-pokeball.png';
import { PokemonCardProps, PokemonTypeProps } from '../../types';
import { addZerosToId, formatTextToCapitalize, getPokemonBG } from '../../utils';
import { PokemonBadgeType } from '..';

export function PokemonCard({ id, name, types, setModalData }: PokemonCardProps) {
  return (
    <S.PokemonCard
      onClick={setModalData}
      className="fadeIn"
      pokemonBG={getPokemonBG(types[0].type.name, types[1]?.type.name)}
    >
      <img src={cutPokeball} alt="" />
      <img
        className="pokemon-image fadeInLeft"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${addZerosToId(id)}.png`}
        alt={name}
      />
      <S.PokemonCardBody>
        <small>
          <code>#{addZerosToId(id)}</code>
        </small>
        <h2 title={name}>{formatTextToCapitalize(name)}</h2>
        <div>
          {types.map((item: PokemonTypeProps) => (
            <PokemonBadgeType key={item.slot}>{formatTextToCapitalize(item.type.name)}</PokemonBadgeType>
          ))}
        </div>
      </S.PokemonCardBody>
    </S.PokemonCard>
  );
}
