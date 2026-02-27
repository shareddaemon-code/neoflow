import Image from "next/image";
import Link from "next/link";
import { Heart, Bookmark, Share2 } from "lucide-react";

import { Film } from "@/types";
import { Button } from "@/components/ui/button";

export function PosterCard({ film }: { film: Film }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <Link href={`/film/${film.id}`}>
        <div className="relative h-64 w-full">
          <Image src={film.thumbnail} alt={film.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute bottom-0 w-full p-4">
            <h3 className="text-xl font-semibold">{film.title}</h3>
            <p className="text-sm text-zinc-300">by {film.creatorName}</p>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-end gap-2 p-3">
        <Button variant="ghost" size="icon" aria-label="like">
          <Heart className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="save">
          <Bookmark className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="share">
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
