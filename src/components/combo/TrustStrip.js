import FadeInSection from '@/src/components/combo/FadeInSection';

export default function TrustStrip() {
  return (
    <FadeInSection>
      <div className="rounded-2xl border border-black/5 bg-[color:var(--surface)] px-6 py-5">
        <ul className="grid gap-2 text-sm text-[color:var(--muted)] md:grid-cols-4">
          <li>✓ Quality checked</li>
          <li>✓ Carefully packed</li>
          <li>✓ Secure checkout via Amazon</li>
          <li>✓ Fast delivery</li>
        </ul>
      </div>
    </FadeInSection>
  );
}
