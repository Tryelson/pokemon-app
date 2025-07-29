'use client'

import usePokemonList from "@/lib/usePokemonList"
import { useMemo, useState } from "react"
import PokemonCardSkeleton from "@/components/pokemon/PokemonCardSkeleton"
import PokemonCard from "@/components/pokemon/PokemonCard"
import PokemonModal from "@/components/pokemon/PokemonModal"
import OrderByStrengthSelect from "@/components/filters/OrderByStrenghSelect"

export default function Page() {
  const { pokemons, loading, error } = usePokemonList()
  const [selectedName, setSelectedName] = useState<string | null>(null)
  const [order, setOrder] = useState<'asc' | 'desc'>('desc')

  const orderedPokemons = useMemo(() => {
    if (!pokemons) return []
    return [...pokemons].sort((a, b) => {
      return order === 'asc' ? a.strength - b.strength : b.strength - a.strength
    })
  }, [pokemons, order])

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Pokémons</h1>

      <div className="mb-4">
        <OrderByStrengthSelect value={order} onChange={setOrder} />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <PokemonCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {orderedPokemons.map((poke) => (
            <PokemonCard
              key={poke.name}
              name={poke.name}
              image={poke.image}
              strength={poke.strength}
              onClick={() => setSelectedName(poke.name)}
            />
          ))}
        </div>
      )}

      <PokemonModal name={selectedName} onClose={() => setSelectedName(null)} />
    </main>
  )
}
