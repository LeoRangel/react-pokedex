import * as S from './styles';

type PokemonCardProps = {
  id: number;
  name: string;
  types: any;
  sprites: any;
};
export function PokemonCard({ id, name, types, sprites }: PokemonCardProps) {
  return (
    <S.PokemonCard>
      <img src={sprites.front_default} alt={name} />
      <S.PokemonCardBody>
        <small>#{id}</small>
        <h2>{name}</h2>
        <div>
          {types.map((item: any) => (
            <S.PokemonCardType key={item.slot}>{item.type.name}</S.PokemonCardType>
          ))}
        </div>
      </S.PokemonCardBody>
    </S.PokemonCard>
  );
}
