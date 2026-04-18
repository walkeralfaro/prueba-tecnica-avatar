import { Link } from "react-router"
import type { SimplePokemon } from "../schemas"

type PokemonCardProp = {
  pokemon: SimplePokemon
}

export default function PokemonCard({ pokemon }: PokemonCardProp) {
  return (
    <Link to={`${pokemon.name}`}>
      <div className=" rounded-lg p-3 w-50 h-60 bg-slate-700 transition hover:scale-105 hover:bg-slate-500 flex flex-col hover:cursor-pointer">

        <p className="text-orange-400 text-xl font-bold italic">{`#${pokemon.id}`}</p>

        <div className="flex-1 flex items-center justify-center">
          <img
            className="max-h-28 object-contain"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
          />
        </div>

        <p className="text-2xl text-white capitalize font-black text-center">{pokemon.name}</p>

      </div>
    </Link>
  )
}