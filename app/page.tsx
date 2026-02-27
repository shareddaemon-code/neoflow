import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function OnboardingPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center px-6 text-center">
      <div className="mb-12 space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">NeoFlow</p>
        <h1 className="text-4xl font-bold leading-tight">A new world for cinema lovers</h1>
      </div>

      <ul className="mb-10 space-y-3 text-left text-sm text-zinc-300">
        <li>• Discover new filmmakers</li>
        <li>• Watch original creator series</li>
        <li>• Follow rising cinema talent</li>
      </ul>

      <div className="flex w-full flex-col gap-3">
        <Link href="/home" className="w-full">
          <Button className="w-full">Sign up</Button>
        </Link>
        <Link href="/home" className="w-full">
          <Button variant="secondary" className="w-full">
            Continue as guest
          </Button>
        </Link>
      </div>
    </main>
  );
}
