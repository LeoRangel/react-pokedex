export type Theme = 'light' | 'dark';

export type PokemonTypeProps = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonCardProps = {
  id: number;
  name: string;
  types: PokemonTypeProps[];
  image: string;
};
