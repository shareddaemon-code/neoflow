import Link from "next/link";
import { Clapperboard, Compass, House, LibraryBig, Upload } from "lucide-react";

const nav = [
  { href: "/home", label: "Home", icon: House },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/library", label: "Library", icon: LibraryBig },
  { href: "/upload", label: "Upload", icon: Upload }
];

export function MobileShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-background">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/95 px-4 py-4 backdrop-blur">
        <Link href="/home" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <Clapperboard className="h-5 w-5" />
          NeoFlow
        </Link>
      </header>
      <main className="flex-1 overflow-y-auto px-4 pb-24 pt-4">{children}</main>
      <nav className="fixed bottom-0 left-1/2 z-30 flex w-full max-w-md -translate-x-1/2 justify-between border-t border-border bg-background/95 px-5 py-3 backdrop-blur">
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
