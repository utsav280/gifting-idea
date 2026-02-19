import Image from 'next/image';
import Link from 'next/link';

export default function ComboCard({ combo }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/5 bg-[color:var(--surface)] shadow-soft">
      <div className="relative h-48">
        <Image
          src={combo.featuredImage}
          alt={`${combo.title} featured set`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">{combo.theme}</p>
        <h2 className="text-xl font-semibold">{combo.title}</h2>
        <p className="text-sm text-[color:var(--muted)]">{combo.tagline}</p>
        <div className="flex items-center justify-between pt-1">
          <p className="text-lg font-semibold text-[color:var(--accent)]">{combo.price}</p>
          <Link
            href={`/combos/${combo.slug}`}
            className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-[color:var(--button-text)]"
          >
            View Combo
          </Link>
        </div>
      </div>
    </article>
  );
}
