import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog"
import usePokemonDetails from "@/lib/usePokemonDetails"
import PokemonCardSkeleton from "./PokemonCardSkeleton"

interface Props {
  name: string | null
  onClose: () => void
}
  
export default function PokemonModal({ name, onClose }: Props) {
  const { data, loading, error } = usePokemonDetails(name)

  return (
    <Dialog open={!!name} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="capitalize">{name || "Pokémon"}</DialogTitle>
          <DialogDescription>Detalhes do Pokémon selecionado</DialogDescription>
        </DialogHeader>
    
        {loading && <PokemonCardSkeleton />}
    
        {error && (
          <p className="text-red-500 text-sm text-center mt-4">{error}</p>
        )}
    
        {!loading && data && (
          <div className="text-sm space-y-2">
            <img
              src={data.sprites.front_default}
              className="w-24 h-24 mx-auto"
            />
            <p>
              <strong>Tipos:</strong>{" "}
              {data.types.map((t) => t.type.name).join(", ")}
            </p>
            <p>
              <strong>Habilidades:</strong>{" "}
              {data.abilities.map((a) => a.ability.name).join(", ")}
            </p>
            <p>
              <strong>Ataque:</strong>{" "}
              {data.stats.find((s) => s.stat.name === "attack")?.base_stat ?? "?"}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
  