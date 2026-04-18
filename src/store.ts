import { create } from "zustand";
import { getPokemonByName, getPokemons } from "./services/pokeapi";
import type { Pokemon, SimplePokemon } from "./schemas";

type PokemonsStore = {
  error: string | null;
  pokemon: Pokemon | null;
  pokemons: SimplePokemon[];
  fetchPokemons: () => Promise<void>;
  fetchPokemonByName: (name: string) => Promise<void>;
};

export const usePokemonsStore = create<PokemonsStore>((set) => ({
  pokemon: null,
  error: null,
  loading: false,
  pokemons: [],
  fetchPokemons: async () => {
    const pokemons = await getPokemons();
    set({ pokemons });
  },
  fetchPokemonByName: async (name: string) => {
    try {
      set({ error: null });

      const pokemon = await getPokemonByName(name);

      set({ pokemon});
    } catch (err: any) {
      set({
        error: err.message,
        pokemon: null,
      });
    }
  },
}));
