import { Skeleton } from '@/components/ui/skeleton'

export const SkeletonRolesTable = () => {
  return (
    <section>
      <Skeleton className="h-12 w-full rounded-s-sm" />

      <div className="grid grid-cols-5 mt-5 gap-4">
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </div>

      <div className="grid grid-cols-5 mt-5 gap-4">
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </div>

      <div className="grid grid-cols-5 mt-5 gap-4">
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </div>

      <div className="grid grid-cols-5 mt-5 gap-4">
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </div>
    </section>
  )
}
