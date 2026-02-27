export type Film = {
  id: string;
  title: string;
  creatorId: string;
  creatorName: string;
  thumbnail: string;
  description: string;
  duration: string;
  category: "Sci-fi" | "Thriller" | "Experimental";
  tags: string[];
  featured?: boolean;
  episodes?: { id: string; title: string; duration: string }[];
};

export type Creator = {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  banner: string;
  bio: string;
  followers: string;
  featuredSeries: string;
};
