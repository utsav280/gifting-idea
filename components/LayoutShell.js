import Link from 'next/link';

export default function LayoutShell({ children }) {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 md:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Giftly Premium
        </Link>
        <nav>
          <a
            href="#combos"
            className="rounded-full border border-[color:var(--accent)] px-4 py-2 text-sm font-medium"
          >
            Explore Combos
          </a>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-6xl px-5 pb-16 md:px-8">{children}</main>
    </div>
  );
}
