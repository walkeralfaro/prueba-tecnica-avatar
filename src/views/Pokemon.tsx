import { useEffect } from "react"
import { Link, useParams } from "react-router"
import { usePokemonsStore } from "../store"

export default function PokemonDetail() {
  const { name } = useParams()

  const pokemon = usePokemonsStore((state) => state.pokemon)
  const fetchPokemonByName = usePokemonsStore((state) => state.fetchPokemonByName)
  const error = usePokemonsStore((state) => state.error)
  const loading = usePokemonsStore((state) => state.loading)

  useEffect(() => {
    if (name) {
      fetchPokemonByName(name)
    }
  }, [name])

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="animate-pulse text-slate-400 text-xl">
          Loading Pokémon...
        </div>
      </div>
    )
  }

  // Error
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
        <h1 className="text-3xl font-bold mb-2">Not Found</h1>
        <p className="text-slate-400">{error}</p>

        <Link
          to="/"
          className="mt-6 px-4 py-2 bg-slate-700 rounded hover:bg-slate-600 inline-block"
        >
          Go Home
        </Link>
      </div>
    )
  }

  // Pokemon
  if (pokemon) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 text-white p-6">
        <div className="max-w-4xl mx-auto">

          {/* Card */}
          <div className="bg-slate-800/60 backdrop-blur rounded-2xl shadow-xl p-6 md:p-10">

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
            <div className="my-8 border-t border-slate-700" />

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

          </div>
        </div>
      </div>
    )
  }

}