import FadeInSection from '@/src/components/combo/FadeInSection';

export default function WhyBetterSection() {
  return (
    <FadeInSection>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-black/5 bg-[color:var(--surface)] p-6">
          <h3 className="text-lg font-semibold">Typical gift shopping</h3>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
            <li>• Random picks with no cohesion</li>
            <li>• Mixed aesthetics and quality</li>
            <li>• High effort, uncertain emotional impact</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-[color:var(--accent)]/40 bg-[color:var(--surface)] p-6">
          <h3 className="text-lg font-semibold">Curated, not collected.</h3>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
            <li>• One coherent mood and story</li>
            <li>• Premium visual harmony and finish</li>
            <li>• Saves time while feeling deeply intentional</li>
          </ul>
        </article>
      </div>
    </FadeInSection>
  );
}
