import { PokemonCard } from '..';
import { PokemonProps } from '../../types';
import * as S from './styles';

type PokemonListProps = {
  pokemonList: PokemonProps[];
};

export function PokemonList({ pokemonList }: PokemonListProps) {
  return (
    <S.PokemonList>
      {pokemonList.length > 0 &&
        pokemonList.map((pokemon: PokemonProps) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            image={pokemon.image}
          />
        ))}
    </S.PokemonList>
  );
}
