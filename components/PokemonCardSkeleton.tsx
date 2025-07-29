export default function PokemonCardSkeleton() {
  return (
    <div className="skeletonWrapper">
      <div className="shimmer" />

      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-24 h-24 bg-white/10 rounded-full" />
        <div className="h-4 w-3/4 bg-white/10 rounded" />
        <div className="h-3 w-1/2 bg-white/10 rounded" />
      </div>
    </div>
  )
}
