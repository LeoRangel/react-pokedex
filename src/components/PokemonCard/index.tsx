import * as S from './styles';

type PokemonCardProps = {
  id: number;
  name: string;
  types: any;
  sprites: any;
};

export function PokemonCard({ id, name, types, sprites }: PokemonCardProps) {
  return (
    <S.PokemonCard mainType={types[0].type.name}>
      <img src={sprites.front_default} alt={name} />
      <S.PokemonCardBody>
        <small>#{id}</small>
        <h2>{name}</h2>
        <div>
          {types.map((item: any) => (
            <S.PokemonBadgeType key={item.slot}>{item.type.name}</S.PokemonBadgeType>
          ))}
        </div>
      </S.PokemonCardBody>
    </S.PokemonCard>
  );
}
