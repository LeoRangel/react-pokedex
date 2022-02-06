import { useEffect, useState } from 'react';
import { Container, PokemonList } from '../../components';
import { pokeapi } from '../../services';
import { PokemonProps } from '../../types';

export function Home() {
  const [pokemonList, setPokemonList] = useState<PokemonProps[]>([]);

  async function getPokemon() {
    // Get pokemon list
    const { data } = await pokeapi.get('/pokemon?offset=880');
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
  }, []);

  return (
    <Container>
      <PokemonList pokemonList={pokemonList} />
    </Container>
  );
}
