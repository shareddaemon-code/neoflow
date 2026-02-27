import { creators, films } from "@/lib/mock-data";
import { CreatorChip } from "@/components/sections/creator-chip";
import { PosterCard } from "@/components/sections/poster-card";
import { SectionTitle } from "@/components/sections/section-title";

export default function HomePage() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">For You</h1>
        <p className="text-sm text-muted-foreground">Swipe up</p>
      </div>

      <SectionTitle title="Trending stories" />
      <div className="space-y-4">
        {films.map((film) => (
          <PosterCard key={film.id} film={film} />
        ))}
      </div>

      <SectionTitle title="New creators" />
      <div className="flex gap-4 overflow-x-auto pb-2">
        {creators.map((creator) => (
          <CreatorChip key={creator.id} creator={creator} />
        ))}
      </div>

      <SectionTitle title="Editor’s picks" />
      <div className="space-y-4 pb-4">
        {films
          .filter((film) => film.featured)
          .map((film) => (
            <PosterCard key={film.id} film={film} />
          ))}
      </div>
    </div>
  );
}
