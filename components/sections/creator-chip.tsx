import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Creator } from "@/types";

export function CreatorChip({ creator }: { creator: Creator }) {
  return (
    <Link href={`/creator/${creator.id}`} className="flex min-w-24 flex-col items-center gap-2">
      <Avatar className="h-16 w-16 border border-border">
        <AvatarImage src={creator.avatar} alt={creator.name} />
        <AvatarFallback>{creator.name.slice(0, 1)}</AvatarFallback>
      </Avatar>
      <p className="text-xs text-muted-foreground">{creator.handle}</p>
    </Link>
  );
}
