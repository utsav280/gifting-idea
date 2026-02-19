const pillars = [
  'Curated, not random',
  'Premium packaging',
  'Designed for real-life moments',
  'Available on trusted platforms'
];

export default function PhilosophySection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold md:text-3xl">Built With Intention</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {pillars.map((pillar) => (
          <article key={pillar} className="rounded-2xl border border-black/5 bg-[color:var(--surface)] p-6">
            <p className="text-base font-medium">{pillar}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
