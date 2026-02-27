import { MobileShell } from "@/components/sections/mobile-shell";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return <MobileShell>{children}</MobileShell>;
}
