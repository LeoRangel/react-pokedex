import { useEffect, useState } from 'react';
import { Container, Pagination, PokemonList } from '../../components';
import { PageHeader } from '../../components/PageHeader';
import useApp from '../../hooks/useApp';
import { pokeapi } from '../../services';
import { PokemonProps } from '../../types';
import * as S from './styles';

export function Home() {
  const { theme, toggleTheme } = useApp();
  const [pokemonList, setPokemonList] = useState<PokemonProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  const apiTotalPokemon = 1118;
  const pokemonByPage = 20;
  const totalPages = Math.ceil(apiTotalPokemon / pokemonByPage);

  async function getPokemonByPage() {
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

  async function getPokemonBySearch() {
    // Get pokemon list
    const { data } = await pokeapi.get(`/pokemon?limit=${apiTotalPokemon}`);
    // Filter pokemon
    const resp1 = await data.results.filter((item: { name: string; url: string }) => item.name.includes(search));
    // Get individual pokemon infos
    const resp2 = await Promise.all(resp1.map((item: { name: string; url: string }) => pokeapi.get(item.url)));
    // Saving only necessary infos
    const format = resp2.map((req) => {
      const { id, name, types, sprites } = req.data;
      return { id, name, types, image: sprites.front_default };
    });

    setPokemonList(format);
  }

  function onSearch() {
    if (search.length <= 0) {
      getPokemonByPage();
    } else {
      getPokemonBySearch();
    }
  }

  useEffect(() => {
    getPokemonByPage();
  }, [currentPage]);

  useEffect(() => {
    onSearch();
  }, [search]);

  const handleSearch = (e: any) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <>
      <PageHeader theme={theme} toggleTheme={toggleTheme} search={search} handleSearch={handleSearch} />
      <S.MainContent>
        <Container>
          <PokemonList pokemonList={pokemonList} />
          {search.length <= 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handleCurrentPage={(value) => setCurrentPage(value)}
            />
          )}
        </Container>
      </S.MainContent>
    </>
  );
}
