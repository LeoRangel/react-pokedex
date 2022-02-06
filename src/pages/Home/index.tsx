import { useEffect, useState } from 'react';
import { Container, Pagination, PokemonList } from '../../components';
import { pokeapi } from '../../services';
import { PokemonProps } from '../../types';

export function Home() {
  const [pokemonList, setPokemonList] = useState<PokemonProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const apiTotalPokemon = 1118;
  const pokemonByPage = 20;
  const totalPages = Math.ceil(apiTotalPokemon / pokemonByPage);

  async function getPokemon() {
    // Get pokemon list
    const { data } = await pokeapi.get(`/pokemon?offset=${(currentPage - 1) * pokemonByPage}`);
    // Get individual pokemon infos
    const resp = await Promise.all(data.results.map((item: { name: string; url: string }) => pokeapi.get(item.url)));
    // Saving only necessary infos
    const format = resp.map((req) => {
      const { id, name, types, sprites } = req.data;
      return { id, name, types, image: sprites.front_default };
    });

    setPokemonList(format);
  }

  useEffect(() => {
    getPokemon();
  }, [currentPage]);

  return (
    <Container>
      <PokemonList pokemonList={pokemonList} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleCurrentPage={(value) => setCurrentPage(value)}
      />
    </Container>
  );
}
