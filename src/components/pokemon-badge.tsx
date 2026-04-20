import { Link } from "react-router";
import type { Species } from "../schemas/types";

export default function PokemonBadge({ pokemon, pokemonName }: { pokemon: Species, pokemonName: string }) {
  const id = pokemon.url.split("/").at(-2)!

  return (
    <Link to={`/${pokemon.name}`}>
      
    <div className={` ${pokemonName === pokemon.name ? 'border-orange-400 border-2 text-orange-400' : 'bg-slate-700 text-white'} rounded-full w-40 h-40 flex flex-col items-center justify-center overflow-hidden shadow hover:cursor-pointer`}>
      
      <img
        className="h-20"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt={pokemon.name}
      />

      <p className="text-xl font-black capitalize mt-1 text-center">
        {pokemon.name}
      </p>

    </div>
    </Link>
  )
}
