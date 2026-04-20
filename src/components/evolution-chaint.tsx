import type { Species } from "../schemas/types";
import PokemonBadge from "./pokemon-badge";


export default function EvolutionChain({evolutionChain, pokemonName} : {evolutionChain: Species[], pokemonName: string}) {
  return (
    <div className=" flex flex-col items-center gap-6 lg:flex-wrap lg:flex-row">
      {
        evolutionChain.map((pokemonSpecies) => (
          <PokemonBadge key={pokemonSpecies.name} pokemon={pokemonSpecies} pokemonName={pokemonName} />
        ))
      }
    </div>
  )
}
