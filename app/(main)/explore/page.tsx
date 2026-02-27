import Link from "next/link";

import { CreatorChip } from "@/components/sections/creator-chip";
import { PosterCard } from "@/components/sections/poster-card";
import { SectionTitle } from "@/components/sections/section-title";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { creators, films } from "@/lib/mock-data";

const categories = ["Sci-fi", "Thriller", "Experimental"];
const tags = ["#mindbender", "#oneshot", "#neo-noir"];

export default function ExplorePage() {
  return (
    <div className="space-y-4 pb-4">
      <Input placeholder="Search films, creators, tags..." />

      <SectionTitle title="Categories" />
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge key={category}>{category}</Badge>
        ))}
      </div>

      <SectionTitle title="Rising creators" />
      <div className="flex gap-4 overflow-x-auto pb-2">
        {creators.map((creator) => (
          <CreatorChip key={creator.id} creator={creator} />
        ))}
      </div>

      <SectionTitle title="Trending tags" />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} className="bg-muted">
            {tag}
          </Badge>
        ))}
      </div>

      <SectionTitle title="Suggested picks" />
      <div className="space-y-4">
        {films.map((film) => (
          <div key={film.id}>
            <PosterCard film={film} />
            <Link href={`/film/${film.id}`} className="mt-2 inline-block text-xs text-muted-foreground">
              Open details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
