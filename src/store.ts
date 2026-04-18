import { create } from "zustand";
import { getPokemons } from "./services/pokeapi";
import type { SimplePokemon } from "./schemas";

type PokemonsStore = {
  pokemons: SimplePokemon[];
  fetchPokemons: () => Promise<void>;
};

export const usePokemonsStore = create<PokemonsStore>((set) => ({
  pokemons: [],
  fetchPokemons: async () => {
    const pokemons = await getPokemons();
    set({ pokemons });
  },
}));
