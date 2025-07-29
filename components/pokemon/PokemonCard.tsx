import PokemonImage from "./PokemonImage"

interface Props {
  name: string
  image: string
  strength: number
  onClick: () => void
}

export default function PokemonCard({ name, image, strength, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-lg bg-muted p-4 hover:shadow-lg hover:scale-[1.02] transition relative"
    >
      <PokemonImage
        src={image}
        alt={name || "Pokebola"}
        width={80}
        height={80}
      />
      <p className="text-center capitalize font-medium mt-2">{name}</p>
      <p className="text-center text-sm text-muted-foreground">Ataque: {strength}</p>
    </div>
  )
}
