import { useEffect, useState } from "react"

export interface PokemonPreview {
  name: string
  image: string
  strength: number
}

export default function usePokemonList(limit = 20) {
  const [pokemons, setPokemons] = useState<PokemonPreview[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchList() {
    try {
      setLoading(true)
      setError(null)

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      if (!res.ok) throw new Error("Erro ao buscar Pokémons")
      
      const json = await res.json()

      const results = await Promise.all(
        json.results.map(async (poke: any) => {
          const resDetail = await fetch(poke.url)
          if (!resDetail.ok) throw new Error(`Erro em ${poke.name}`)
          const detail = await resDetail.json()

          const attackStat = detail.stats.find((item: any) => item.stat.name === "attack")?.base_stat ?? 0

          return {
            name: detail.name,
            image: detail.sprites.front_default,
            strength: attackStat,
          }
        })
      )

      setPokemons(results)
    } catch (err: any) {
      setError(err.message || "Erro inesperado")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchList()
  }, [limit])

  return { pokemons, loading, error }
}
