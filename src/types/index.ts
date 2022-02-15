export type Theme = 'light' | 'dark';

export type PokemonTypeProps = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonStatsProps = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonCardProps = {
  id: number;
  name: string;
  types: PokemonTypeProps[];
  // image: string;
  setModalData: () => void;
};

export type PokemonProps = {
  id: number;
  name: string;
  types: PokemonTypeProps[];
  // image: string;
  // height: number;
  // weight: number;
  stats: PokemonStatsProps[];
};
