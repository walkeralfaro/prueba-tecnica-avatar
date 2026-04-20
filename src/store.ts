import { create } from "zustand";
import { getEvolutionChainByPokemon, getPokemonByName, getPokemons } from "./services/pokeapi";
import type { Pokemon, SimplePokemon } from "./schemas";
import type { Species } from "./schemas/types";

type PokemonsStore = {
  error: string | null;
  pokemon: Pokemon | null;
  pokemons: SimplePokemon[];
  evolutionChain: Species[] | null;
  fetchPokemons: () => Promise<void>;
  fetchPokemonByName: (name: string) => Promise<void>;
};

export const usePokemonsStore = create<PokemonsStore>((set) => ({
  error: null,
  pokemon: null,
  pokemons: [],
  evolutionChain: null,
  fetchPokemons: async () => {
    const pokemons = await getPokemons();
    set({ pokemons });
  },
  fetchPokemonByName: async (name: string) => {
    try {
      set({ error: null });

      const pokemon = await getPokemonByName(name);
      const evolutionChain = await getEvolutionChainByPokemon(name)

      set({ pokemon, evolutionChain });
    } catch (err: any) {
      set({
        error: err.message,
        pokemon: null,
        evolutionChain: null,
      });
    }
  },
}));
