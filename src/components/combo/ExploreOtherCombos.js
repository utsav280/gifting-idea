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
            <article key={other.slug} className="overflow-hidden rounded-2xl border border-black/5 bg-[color:var(--surface)]">
              <div className="relative h-44">
                <Image
                  src={other.featuredImage}
                  alt={`${other.title} preview`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-semibold">{other.title}</h3>
                <p className="text-sm text-[color:var(--muted)]">{other.tagline}</p>
                <Link
                  href={`/combos/${other.slug}`}
                  className="inline-flex rounded-full border border-[color:var(--accent)] px-4 py-2 text-sm font-medium"
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
