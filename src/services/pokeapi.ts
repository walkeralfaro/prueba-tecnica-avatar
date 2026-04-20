import axios from "axios";
import { PokemonSchema, PokemonsSchema } from "../schemas";
import { extractEvolutionChain } from "../utils/evolution";

export async function getPokemons() {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;
  const { data } = await axios(url);
  const result = PokemonsSchema.safeParse(data);

  if (result.success) {
    const pokemons = result.data.results.map((pokemon) => ({
      id: pokemon.url.split("/").at(-2)!,
      name: pokemon.name,
    }));

    return pokemons;
  }
}

export async function getPokemonByName(name: string) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
    const { data } = await axios(url);
    const result = PokemonSchema.safeParse(data);

    if (!result.success) {
      throw new Error("Invalid response from Pokeapi");
    }

    return result.data;
    
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error("Pokemon not found");
      }
    }

    throw new Error("Unexpected error");
  }
}

export async function getEvolutionChainByPokemon(name: string) {
  // 1. Pokemon
  const pokemonRes = await axios(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
  );

  const speciesUrl = pokemonRes.data.species.url;

  // 2. Species
  const speciesRes = await axios(speciesUrl);

  const evolutionUrl = speciesRes.data.evolution_chain.url;

  // 3. Evolution chain
  const evolutionRes = await axios(evolutionUrl);

  const evolutionNames = extractEvolutionChain(evolutionRes.data.chain)

  return evolutionNames;
}