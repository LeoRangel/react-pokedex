import { PokemonCard } from '..';
import { PokemonProps } from '../../types';
import * as S from './styles';

type PokemonListProps = {
  pokemonList: PokemonProps[];
  setModalData: (pokemon: PokemonProps) => void;
};

export function PokemonList({ pokemonList, setModalData }: PokemonListProps) {
  return (
    <S.PokemonList>
      {pokemonList.length > 0 &&
        pokemonList.map((pokemon: PokemonProps) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            setModalData={() => setModalData(pokemon)}
          />
        ))}
    </S.PokemonList>
  );
}
