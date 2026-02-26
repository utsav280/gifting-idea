import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from '@/src/components/combo/FadeInSection';
import { combos } from '@/data/combos';

export default function ExploreOtherCombos({ combo }) {
  const others = combos.filter((entry) => entry.slug !== combo.slug).slice(0, 2);

  return (
    <FadeInSection>
      <div className="space-y-5">
        <h2 className="text-2xl font-semibold md:text-3xl">Explore other combos</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {others.map((other) => (
            <article key={other.slug} className="group overflow-hidden rounded-[var(--radius-card)] border border-black/5 bg-[color:var(--surface)] shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-0.5">
              <div className="relative h-44">
                <Image
                  src={other.featuredImage}
                  alt={`${other.title} preview`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-semibold">{other.title}</h3>
                <p className="text-sm text-[color:var(--muted)]">{other.tagline}</p>
                <Link
                  href={`/combos/${other.slug}`}
                  className="inline-flex rounded-full border border-[color:var(--accent)] px-4 py-2 text-sm font-medium transition duration-300 hover:bg-[color:var(--accent)] hover:text-[color:var(--button-text)] active:scale-[0.98]"
                >
                  View combo
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
