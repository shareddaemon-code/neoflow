import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { films, creators } from "@/lib/mock-data";

export default function FilmDetailPage({ params }: { params: { id: string } }) {
  const film = films.find((item) => item.id === params.id);
  if (!film) return notFound();

  const creator = creators.find((item) => item.id === film.creatorId);

  return (
    <main className="mx-auto min-h-screen w-full max-w-md px-4 pb-8">
      <div className="relative mt-4 h-72 overflow-hidden rounded-2xl border border-border">
        <Image src={film.thumbnail} alt={film.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/15" />
      </div>

      <h1 className="mt-4 text-3xl font-bold">{film.title}</h1>
      <div className="mt-2 flex items-center justify-between">
        <Link href={`/creator/${film.creatorId}`} className="text-sm text-muted-foreground">
          {creator?.handle ?? film.creatorName}
        </Link>
        <Button variant="outline" size="sm">
          Follow creator
        </Button>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-zinc-300">{film.description}</p>

      <div className="mt-5 flex gap-3">
        <Link href={`/watch/${film.id}`} className="flex-1">
          <Button className="w-full">Watch now</Button>
        </Link>
        <Button variant="secondary" className="flex-1">
          Save to watchlist
        </Button>
      </div>

      {film.episodes && (
        <div className="mt-6 space-y-2 rounded-xl border border-border bg-card p-3">
          <h2 className="text-base font-semibold">Episodes</h2>
          {film.episodes.map((episode, idx) => (
            <div key={episode.id} className="flex items-center justify-between border-t border-border/80 py-2 text-sm">
              <span>
                {idx + 1}. {episode.title}
              </span>
              <span className="text-muted-foreground">{episode.duration}</span>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
