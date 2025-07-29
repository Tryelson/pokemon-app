import { useEffect, useState } from "react"

interface PokemonDetail {
  name: string
  sprites: { front_default: string }
  types: { type: { name: string } }[]
  abilities: { ability: { name: string } }[]
  stats: { base_stat: number; stat: { name: string } }[]
}

const cache = new Map<string, PokemonDetail>()

export default function usePokemonDetails(name: string | null) {
  const [data, setData] = useState<PokemonDetail | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function fetchDetail() {
    if (!name) return
    
    if (cache.has(name)) {
      setData(cache.get(name)!)
      return
    }

    try {
      setLoading(true)
      setError(null)

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      if (!res.ok) throw new Error(`Erro ao buscar detalhes de ${name}`)

      const json = await res.json()
      cache.set(name, json)
      setData(json)
    } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro inesperado");
        }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!name) return

    fetchDetail()
    // react-hooks/exhaustive-deps
  }, [name])

  return { data, loading, error }
}
