import { useEffect } from "react"
import { usePokemonsStore } from "../store"
import PokemonCard from "../components/pokemon-card"
import Footer from "../components/footer"

export default function Home() {

  const fetchPokemons = usePokemonsStore((state) => state.fetchPokemons)
  const pokemons = usePokemonsStore((state) => state.pokemons)

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <>
      <header className="max-w-6xl mx-auto px-4 mt-10 mb-6">
        <h1 className="text-white text-4xl sm:text-5xl font-light tracking-wide">
          The{" "}
          <span className="text-orange-400 italic font-black">
            Pokémon
          </span>{" "}
          Library
        </h1>
        <p className="text-slate-400 mt-2">
          Browse and explore your favorite Pokémon
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-10">
        <article className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </article>
      </main>
      
      <Footer />
    </>
  )
}