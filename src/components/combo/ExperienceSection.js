import FadeInSection from '@/src/components/combo/FadeInSection';
import { getComboContent } from '@/src/components/combo/content';

export default function ExperienceSection({ combo }) {
  const content = getComboContent(combo.slug);

  return (
    <FadeInSection>
      <div className="rounded-3xl border border-black/5 bg-[color:var(--surface)] p-7 md:p-9">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">The Experience</p>
        <h2 className="mt-3 text-2xl font-semibold md:text-3xl">{content.experienceTitle}</h2>
        <p className="mt-4 max-w-3xl text-[color:var(--muted)]">{content.experienceCopy}</p>
      </div>
    </FadeInSection>
  );
}
