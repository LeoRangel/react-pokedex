import { Container, ToggleThemeButton } from '..';
import { Theme } from '../../types';
import * as S from './styles';

type PageHeaderProps = {
  theme: Theme;
  toggleTheme: () => void;
  search: string;
  handleSearch: (e: any) => void;
};

export function PageHeader({ theme, toggleTheme, search, handleSearch }: PageHeaderProps) {
  return (
    <S.PageHeader>
      <S.Navbar>
        <div>
          <h1>Pokédex</h1>
          {/* <p>All Pokémon listed by National Pokédex number</p> */}
        </div>
        <ToggleThemeButton theme={theme} onClick={toggleTheme} />
      </S.Navbar>
      <Container>
        <S.PokemonSearch>
          <label htmlFor="pokemonSearch">
            <h2>What Pokémon are you looking for?</h2>
            <br />
            <input
              type="search"
              name="pokemonSearch"
              id="pokemonSearch"
              onChange={handleSearch}
              value={search}
              placeholder="Enter pokemon name"
            />
          </label>
        </S.PokemonSearch>
      </Container>
    </S.PageHeader>
  );
}
