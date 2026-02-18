import LayoutShell from '@/components/LayoutShell';
import ComboCard from '@/components/ComboCard';
import { combos } from '@/data/combos';

export default function HomePage() {
  return (
    <LayoutShell>
      <section className="grid gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">Premium gifting startup</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Curated combo boxes for people who deserve thoughtful surprises.
          </h1>
          <p className="max-w-xl text-lg text-[color:var(--muted)]">
            Designed for 18–30 year olds who love meaningful, aesthetic gifting moments. Choose your vibe and
            order instantly from Amazon or Meesho.
          </p>
          <a
            href="#combos"
            className="inline-flex rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--button-text)]"
          >
            Browse Combo Collection
          </a>
        </div>

        <div className="rounded-3xl border border-black/5 bg-[color:var(--surface)] p-7 shadow-soft">
          <h2 className="text-xl font-semibold">Built for modern gifting</h2>
          <ul className="mt-4 space-y-3 text-[color:var(--muted)]">
            <li>• Comfort reset moments for quiet evenings.</li>
            <li>• Romantic experiences with elevated details.</li>
            <li>• Birthday celebration essentials for instant joy.</li>
            <li>• Desk upgrades for creators and professionals.</li>
          </ul>
        </div>
      </section>

      <section id="combos" aria-labelledby="combo-grid-title" className="pb-12 pt-4">
        <h2 id="combo-grid-title" className="text-2xl font-semibold">
          Explore signature combos
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {combos.map((combo) => (
            <ComboCard key={combo.slug} combo={combo} />
          ))}
        </div>
      </section>
    </LayoutShell>
  );
}
