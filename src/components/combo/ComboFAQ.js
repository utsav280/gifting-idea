import FadeInSection from '@/src/components/combo/FadeInSection';
import { getComboContent } from '@/src/components/combo/content';

export default function ComboFAQ({ combo }) {
  const content = getComboContent(combo.slug);

  return (
    <FadeInSection>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold md:text-3xl">Mini FAQ</h2>
        <div className="space-y-3">
          {content.faq.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-black/5 bg-[color:var(--surface)] p-5">
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
