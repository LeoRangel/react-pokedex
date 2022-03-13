import { Container, ToggleThemeButton } from '..';
import { IconSearch } from '../../assets/icons';
import { Theme } from '../../types';
import * as S from './styles';

type PageHeaderProps = {
  theme: Theme;
  toggleTheme: () => void;
  search: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSearch: (e: any) => void;
};

export function PageHeader({ theme, toggleTheme, search, handleSearch }: PageHeaderProps) {
  return (
    <S.PageHeader>
      <S.Navbar>
        <Container>
          <h1>Pokédex</h1>
          {/* <p>All Pokémon listed by National Pokédex number</p> */}
          <ToggleThemeButton theme={theme} onClick={toggleTheme} />
        </Container>
      </S.Navbar>
      <S.PokemonSearch>
        <Container>
          <label htmlFor="pokemonSearch">
            <h2>What Pokémon are you looking for?</h2>
            <br />
            <S.SearchInput>
              <input
                type="search"
                name="pokemonSearch"
                id="pokemonSearch"
                onChange={handleSearch}
                value={search}
                placeholder="Enter pokemon name. Ex.: pikachu"
              />
              <span>{IconSearch()}</span>
            </S.SearchInput>
          </label>
        </Container>
      </S.PokemonSearch>
    </S.PageHeader>
  );
}
