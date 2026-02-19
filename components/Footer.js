import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[color:var(--surface)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-[color:var(--muted)] md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Giftly Premium. Curated gifting with intention.</p>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-[color:var(--text)]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[color:var(--text)]">
            Contact
          </Link>
          <Link href="/#combos" className="hover:text-[color:var(--text)]">
            Shop Combos
          </Link>
        </div>
      </div>
    </footer>
  );
}
