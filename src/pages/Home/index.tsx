import { useEffect, useState } from 'react';
import { Container, Pagination, PokemonInfos, PokemonList, PokemonModal } from '../../components';
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<PokemonProps>();

  // const apiTotalPokemon = 1118;
  const apiTotalPokemon = 898;
  const pokemonByPage = 20;
  const totalPages = Math.ceil(apiTotalPokemon / pokemonByPage);
  const restTotalByPage = apiTotalPokemon % pokemonByPage;
  const apiLimit = restTotalByPage !== 0 && currentPage === totalPages ? restTotalByPage : pokemonByPage;

  async function getPokemonByPage() {
    // Get pokemon list
    const { data } = await pokeapi.get(`/pokemon?limit=${apiLimit}&offset=${(currentPage - 1) * pokemonByPage}`);
    // Get individual pokemon infos
    const resp = await Promise.all(data.results.map((item: { name: string; url: string }) => pokeapi.get(item.url)));
    // Saving only necessary infos
    const format = resp.map((req) => {
      const { id, name, types, stats } = req.data;
      return { id, name, types, stats };
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
      const { id, name, types, stats } = req.data;
      return { id, name, types, stats };
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    onSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    setIsModalVisible(true);
  }, [modalData]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e: any) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <>
      <PageHeader theme={theme} toggleTheme={toggleTheme} search={search} handleSearch={handleSearch} />
      <S.MainContent>
        <Container>
          <PokemonList pokemonList={pokemonList} setModalData={setModalData} />
          {search.length <= 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handleCurrentPage={(value) => setCurrentPage(value)}
            />
          )}
        </Container>
      </S.MainContent>
      {isModalVisible === true && modalData !== undefined ? (
        <PokemonModal setIsModalVisible={setIsModalVisible} setModalData={setModalData}>
          <PokemonInfos modalData={modalData} />
        </PokemonModal>
      ) : null}
    </>
  );
}
