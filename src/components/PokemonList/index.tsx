import { PokemonCard } from '..';
import * as S from './styles';

export function PokemonList({ pokemonList }: any) {
  return (
    <S.PokemonList>
      {pokemonList.length > 0 &&
        pokemonList.map((pokemon: any) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            sprites={pokemon.sprites}
          />
        ))}
    </S.PokemonList>
  );
}
