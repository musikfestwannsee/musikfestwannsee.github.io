import { Skeleton } from "@/components/ui/skeleton"

export default function NewsLoading() {
  return (
    <div className="flex flex-col">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 bg-primary-700">
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <Skeleton className="h-12 w-3/4 max-w-md mb-6 bg-white/20" />
          <Skeleton className="h-6 w-full max-w-xl bg-white/20" />
        </div>
      </section>

      {/* Featured News Skeleton */}
      <section className="py-16 px-4 bg-beige-50">
        <div className="container mx-auto max-w-6xl">
          <Skeleton className="h-10 w-64 mb-12" />
          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-8 w-full mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <Skeleton className="h-6 w-32" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Search Skeleton */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <Skeleton className="h-12 w-full md:w-64" />
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-10 w-32" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Skeleton */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <Skeleton className="h-10 w-64 mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow">
                <Skeleton className="h-40 w-full" />
                <div className="p-4">
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-6 w-full mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-3" />
                  <Skeleton className="h-6 w-24" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </section>
    </div>
  )
}
