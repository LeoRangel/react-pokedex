import { PokemonBadgeType } from '..';
import { PokemonProps, PokemonStatsProps, PokemonTypeProps } from '../../types';
import pokeball from '../../assets/img/pokeball.png';
import {
  addZerosToId,
  formatTextToCapitalize,
  formatTextToCapitalizeWithTrace,
  getHighestStats,
  getPokemonBG,
} from '../../utils';
import * as S from './styles';

type PokemonInfosProps = {
  modalData: PokemonProps | undefined;
};

export function PokemonInfos({ modalData }: PokemonInfosProps) {
  return (
    <div>
      {modalData && (
        <S.PokemonInfos pokemonBG={getPokemonBG(modalData.types[0].type.name, modalData.types[1]?.type.name)}>
          <S.PokemonInfosHeader>
            <small>
              <code>#{addZerosToId(modalData.id)}</code>
            </small>
            <h2 title={modalData.name}>{formatTextToCapitalize(modalData.name)}</h2>
            <div>
              {modalData.types.map((item: PokemonTypeProps) => (
                <PokemonBadgeType key={item.slot}>{formatTextToCapitalize(item.type.name)}</PokemonBadgeType>
              ))}
            </div>
            <img className="pokebola-spinner" src={pokeball} alt="" />
            <img
              className="pokemon-image"
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${addZerosToId(modalData.id)}.png`}
              // src={modalData.image}
              alt={modalData.name}
            />
          </S.PokemonInfosHeader>

          <S.PokemonInfosContent>
            {modalData.stats.map((item: PokemonStatsProps) => (
              <div key={`${item.stat.name}${item.base_stat}`}>
                <p>
                  <strong>{formatTextToCapitalizeWithTrace(item.stat.name)}: </strong>
                  {item.base_stat}
                  <br />
                </p>

                <S.StatsBar
                  value={getHighestStats(item.base_stat, item.stat.name)}
                  pokemonBG={getPokemonBG(modalData.types[0].type.name, modalData.types[1]?.type.name)}
                >
                  <span className="bar">
                    <span className="progress fadeInRight" />
                  </span>
                </S.StatsBar>
              </div>
            ))}
          </S.PokemonInfosContent>
        </S.PokemonInfos>
      )}
    </div>
  );
}
