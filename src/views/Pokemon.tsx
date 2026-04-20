import { useEffect } from "react"
import { useParams } from "react-router"
import { usePokemonsStore } from "../store"
import Loading from "../components/loading"
import Error from "../components/error"
import EvolutionChain from "../components/evolution-chaint"
import ButtonGoHome from "../components/ui/button-go-home"
import ButtonBackNavigation from "../components/ui/button-back-navigation"
import Footer from "../components/footer"

export default function PokemonDetail() {
  const { name } = useParams()

  const pokemon = usePokemonsStore((state) => state.pokemon)
  const fetchPokemonByName = usePokemonsStore((state) => state.fetchPokemonByName)
  const evolutionChain = usePokemonsStore((state) => state.evolutionChain)
  const error = usePokemonsStore((state) => state.error)

  useEffect(() => {
    if (name) {
      fetchPokemonByName(name)
    }
  }, [name])

  // Error
  if (error) {
    return <Error error={error} />
  }

  // Loading
  if (!pokemon || pokemon.name !== name) {
    return <Loading />
  }

  // Pokemon
  if (pokemon) {
    return (
      <>
      <div className=" bg-linear-to-br text-white p-6">

        <div className="max-w-4xl mx-auto">

          {/* Card */}
          <div className="bg-slate-800 backdrop-blur rounded-2xl shadow-xl p-6 md:p-10">

            <div className="mb-8 flex justify-between">
              <ButtonBackNavigation />
              <ButtonGoHome />
            </div>


            {/* Header */}
            <div className="flex flex-col md:flex-row items-center gap-8">

              {/* Imagen */}
              <div className="flex-1 flex justify-center">
                <img
                  className="h-56 object-contain drop-shadow-lg"
                  src={pokemon.sprites.other?.dream_world.front_default ?? ''}
                  alt={pokemon.name}
                />
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-black capitalize">
                  {pokemon.name}
                </h1>

                <p className="text-slate-400 mt-2">
                  #{pokemon.id.toString().padStart(3, "0")}
                </p>

                {/* Types */}
                <div className="flex justify-center md:justify-start gap-2 mt-4">
                  {pokemon.types.map((t) => (
                    <span
                      key={t.type.name}
                      className="px-3 py-1 text-sm rounded-full bg-slate-700 capitalize"
                    >
                      {t.type.name}
                    </span>
                  ))}
                </div>

                {/* Weight */}
                <p className="mt-4 text-slate-300">
                  Weight: <span className="font-bold">{pokemon.weight}</span>{" kg"}
                </p>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-8 border-t border-slate-700" />

            {/* Moves */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Moves</h2>

              <div className="flex flex-wrap gap-2">
                {pokemon.moves.slice(0, 15).map((m) => (
                  <span
                    key={m.move.name}
                    className="bg-slate-700 px-2 py-1 rounded text-sm capitalize"
                  >
                    {m.move.name}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-8 mt-12">Evolution Chain</h2>


            {evolutionChain && (
              <EvolutionChain
                evolutionChain={evolutionChain}
                pokemonName={pokemon.name}
              />
            )}


          </div>
        </div>
      </div>
        <Footer />
      </>
    )
  }

}