import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center gap-3 px-4 text-center">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="text-sm text-muted-foreground">The story you are looking for does not exist.</p>
      <Link href="/home" className="text-sm underline">
        Back to home
      </Link>
    </main>
  );
}
