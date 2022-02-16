import { PokemonBadgeType } from '..';
import { PokemonProps, PokemonStatsProps, PokemonTypeProps } from '../../types';
import pokeball from '../../assets/img/pokeball.png';
import { addZerosToId, formatTextToCapitalize, formatTextToCapitalizeWithTrace, highestStats } from '../../utils';
import * as S from './styles';

type PokemonInfosProps = {
  modalData: PokemonProps | undefined;
};

export function PokemonInfos({ modalData }: PokemonInfosProps) {
  return (
    <div>
      {modalData !== undefined && (
        <S.PokemonInfos mainType={modalData.types[0].type.name}>
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
            <table>
              {modalData.stats.map((item: PokemonStatsProps) => (
                <tr key={`${item.stat.name}${item.base_stat}`}>
                  <td>
                    <h3>{formatTextToCapitalizeWithTrace(item.stat.name)}:</h3>
                  </td>

                  <td>{item.base_stat}</td>

                  <td>
                    <S.StatsBar
                      value={Math.round(item.base_stat * highestStats[item.stat.name.replace('-', '')])}
                      mainType={modalData.types[0].type.name}
                    >
                      <span className="bar">
                        <span className="progress" />
                      </span>
                    </S.StatsBar>
                  </td>
                </tr>
              ))}
            </table>
          </S.PokemonInfosContent>
        </S.PokemonInfos>
      )}
    </div>
  );
}
