import Image from "next/image"

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
      {!image ? (
        <Image
          src={"/pokebola.png"}
          alt={"Pokebola"}
          className="h-20 w-20 mx-auto"
          width={80}
          height={80}
          priority
        />
      ) : (
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          priority
          className="w-20 h-20 object-cover mx-auto"
        />
      )}
      <p className="text-center capitalize font-medium mt-2">{name}</p>
      <p className="text-center text-sm text-muted-foreground">Ataque: {strength}</p>
    </div>
  )
}
