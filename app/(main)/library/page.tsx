import Link from "next/link";
import Image from "next/image";

import { SectionTitle } from "@/components/sections/section-title";
import { creators, films } from "@/lib/mock-data";

export default function LibraryPage() {
  const continueWatching = films[0];

  return (
    <div>
      <h1 className="text-2xl font-bold">Library</h1>

      <SectionTitle title="Continue watching" />
      <Link href={`/watch/${continueWatching.id}`} className="block overflow-hidden rounded-2xl border border-border bg-card">
        <div className="relative h-52">
          <Image src={continueWatching.thumbnail} alt={continueWatching.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/35" />
        </div>
        <div className="p-3">
          <p className="font-medium">{continueWatching.title}</p>
          <div className="mt-2 h-1.5 rounded bg-muted">
            <div className="h-1.5 w-1/3 rounded bg-white" />
          </div>
        </div>
      </Link>

      <SectionTitle title="Saved films" />
      <div className="grid grid-cols-3 gap-3">
        {films.map((film) => (
          <Link key={film.id} href={`/film/${film.id}`} className="relative h-36 overflow-hidden rounded-xl border border-border">
            <Image src={film.thumbnail} alt={film.title} fill className="object-cover" />
          </Link>
        ))}
      </div>

      <SectionTitle title="Following creators" />
      <div className="flex flex-wrap gap-2 pb-4 text-sm text-muted-foreground">
        {creators.map((creator) => (
          <Link key={creator.id} href={`/creator/${creator.id}`} className="rounded-full border border-border px-3 py-1">
            {creator.handle}
          </Link>
        ))}
      </div>
    </div>
  );
}
