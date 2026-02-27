import Link from "next/link";
import { notFound } from "next/navigation";
import { Heart, MessageCircle, Plus, SkipForward } from "lucide-react";

import { Button } from "@/components/ui/button";
import { films } from "@/lib/mock-data";

export default function WatchPage({ params }: { params: { id: string } }) {
  const film = films.find((item) => item.id === params.id);
  if (!film) return notFound();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-black px-4 py-4">
      <div className="relative flex-1 overflow-hidden rounded-2xl border border-border bg-zinc-900">
        <div className="absolute inset-0 grid place-items-center text-center">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Now Playing</p>
            <h1 className="mt-2 text-2xl font-bold">{film.title}</h1>
            <p className="text-sm text-zinc-400">Tap to reveal controls</p>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3 rounded-xl border border-border bg-background/80 p-3">
        <div className="flex justify-between text-sm">
          <Button variant="ghost" className="gap-2">
            <Heart className="h-4 w-4" /> Like
          </Button>
          <Button variant="ghost" className="gap-2">
            <MessageCircle className="h-4 w-4" /> Comment
          </Button>
          <Button variant="ghost" className="gap-2">
            <Plus className="h-4 w-4" /> Follow
          </Button>
        </div>
        <Link href={film.episodes && film.episodes.length > 1 ? `/watch/${film.id}` : "/home"}>
          <Button className="w-full gap-2">
            <SkipForward className="h-4 w-4" /> Next episode
          </Button>
        </Link>
      </div>
    </main>
  );
}
