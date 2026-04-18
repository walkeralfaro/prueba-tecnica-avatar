import axios from "axios";
import { PokemonsSchema } from "../schemas";

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