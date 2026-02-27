import Link from "next/link";
import Footer from "@/components/Footer";
import BuiltWithCare from "@/components/BuiltWithCare";

export default function LayoutShell({ children }) {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 md:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          AROHA
        </Link>
        <nav className="flex items-center gap-2 text-sm md:gap-4">
          <Link
            href="/#combos"
            className="rounded-full px-3 py-2 text-[color:var(--muted)] hover:text-[color:var(--text)]"
          >
            Combos
          </Link>
          <Link
            href="/about"
            className="rounded-full px-3 py-2 text-[color:var(--muted)] hover:text-[color:var(--text)]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-[color:var(--accent)] px-4 py-2 font-medium transition duration-300 hover:shadow-soft"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-6xl px-5 pb-20 md:px-8">
        {children}
      </main>
      <BuiltWithCare />
      <Footer />
    </div>
  );
}
