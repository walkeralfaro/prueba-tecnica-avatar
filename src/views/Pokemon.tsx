import { useParams } from "react-router"

export default function PokemonDetail() {
  const { name } = useParams()

  return (
    <div className="text-white p-10">
      <h1 className="text-3xl">Pokemon: {name}</h1>
    </div>
  )
}