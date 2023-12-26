import { Skeleton } from '@/components/ui/skeleton'

export const SkeletonEditRole = () => {
  return (
    <section>
      <Skeleton className="h-5 w-1/6 rounded-s-sm" />

      <Skeleton className="h-8 w-full rounded-s-sm mt-5" />

      <Skeleton className="h-3 w-3/12 rounded-s-sm mt-5" />

      <Skeleton className="h-8 w-1/12 rounded-s-sm mt-5" />
    </section>
  )
}
