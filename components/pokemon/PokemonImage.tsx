import Image from 'next/image'
import { useState } from 'react'

interface PokemonImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export default function PokemonImage({ src, alt, width = 96, height = 96 }: PokemonImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onError={() => setImgSrc('/pokebola.png')}
      className="h-20 w-20 mx-auto"
      priority
    />
  )
}
