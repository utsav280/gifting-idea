import FadeInSection from '@/src/components/combo/FadeInSection';
import { getComboContent } from '@/src/components/combo/content';

export default function OccasionBlocks({ combo }) {
  const content = getComboContent(combo.slug);

  return (
    <FadeInSection>
      <div className="space-y-5">
        <h2 className="text-2xl font-semibold md:text-3xl">Perfect occasion scenarios</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {content.occasions.map((occasion) => (
            <article key={occasion.title} className="rounded-[var(--radius-card)] border border-black/5 bg-[color:var(--surface)] shadow-[var(--shadow-card)] p-6">
              <h3 className="text-lg font-semibold">{occasion.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{occasion.description}</p>
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
