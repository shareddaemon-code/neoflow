import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { creators, films } from "@/lib/mock-data";

export default function CreatorProfilePage({ params }: { params: { id: string } }) {
  const creator = creators.find((item) => item.id === params.id);
  if (!creator) return notFound();

  const creatorFilms = films.filter((film) => film.creatorId === creator.id);

  return (
    <main className="mx-auto min-h-screen w-full max-w-md px-4 pb-8">
      <div className="relative mt-4 h-40 overflow-hidden rounded-2xl border border-border">
        <Image src={creator.banner} alt={creator.name} fill className="object-cover" />
      </div>
      <div className="-mt-7 ml-4 h-14 w-14 overflow-hidden rounded-full border-2 border-background">
        <Image src={creator.avatar} alt={creator.name} width={56} height={56} className="h-full w-full object-cover" />
      </div>

      <div className="mt-3 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">{creator.name}</h1>
          <p className="text-sm text-muted-foreground">{creator.followers} followers</p>
        </div>
        <Button size="sm">Follow</Button>
      </div>

      <p className="mt-3 text-sm text-zinc-300">{creator.bio}</p>

      <section className="mt-6">
        <h2 className="mb-3 text-lg font-semibold">Featured series</h2>
        <div className="relative h-36 overflow-hidden rounded-2xl border border-border">
          <Image src={creatorFilms[0]?.thumbnail ?? creator.banner} alt={creator.featuredSeries} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-3 left-3 text-sm font-medium">{creator.featuredSeries}</div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 text-lg font-semibold">Filmography</h2>
        <div className="grid grid-cols-2 gap-3">
          {creatorFilms.map((film) => (
            <Link key={film.id} href={`/film/${film.id}`} className="relative h-44 overflow-hidden rounded-xl border border-border">
              <Image src={film.thumbnail} alt={film.title} fill className="object-cover" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
