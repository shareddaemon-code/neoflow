import { Creator, Film } from "@/types";

export const creators: Creator[] = [
  {
    id: "echo-noir",
    name: "Echo Noir",
    handle: "@echonoir",
    avatar:
      "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=200&q=80",
    banner:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1200&q=80",
    bio: "Neo-noir filmmaker crafting high-tension shorts.",
    followers: "128K",
    featuredSeries: "Night Shift Stories"
  },
  {
    id: "luma-park",
    name: "Luma Park",
    handle: "@lumapark",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    banner:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    bio: "Experimental visual worlds and cinematic essays.",
    followers: "72K",
    featuredSeries: "Fractured Realities"
  },
  {
    id: "kai-river",
    name: "Kai River",
    handle: "@kairiver",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    banner:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1200&q=80",
    bio: "Grounded sci-fi stories from rising voices.",
    followers: "54K",
    featuredSeries: "Orbit District"
  }
];

export const films: Film[] = [
  {
    id: "silent-orbit",
    title: "Silent Orbit",
    creatorId: "kai-river",
    creatorName: "@kairiver",
    thumbnail:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1200&q=80",
    description:
      "An astronaut returns to a city where time runs in reverse after every sunset.",
    duration: "12:34",
    category: "Sci-fi",
    tags: ["#mindbender", "#oneshot"],
    featured: true,
    episodes: [
      { id: "ep1", title: "Reentry", duration: "12:34" },
      { id: "ep2", title: "The Sixth Hour", duration: "10:02" },
      { id: "ep3", title: "Echo Window", duration: "14:51" }
    ]
  },
  {
    id: "night-shift",
    title: "Night Shift Stories",
    creatorId: "echo-noir",
    creatorName: "@echonoir",
    thumbnail:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80",
    description:
      "Three strangers meet at a diner that appears only when someone lies.",
    duration: "10:12",
    category: "Thriller",
    tags: ["#neo-noir", "#thriller"],
    episodes: [
      { id: "ep1", title: "The Diner", duration: "10:12" },
      { id: "ep2", title: "Two Truths", duration: "08:44" }
    ]
  },
  {
    id: "glass-cities",
    title: "Glass Cities",
    creatorId: "luma-park",
    creatorName: "@lumapark",
    thumbnail:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    description:
      "A visual poem about memory, architecture, and digital ghosts.",
    duration: "09:47",
    category: "Experimental",
    tags: ["#visualessay", "#experimental"],
    featured: true
  }
];
