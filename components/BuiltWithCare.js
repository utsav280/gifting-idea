export default function BuiltWithCare() {
  const points = [
    'Quality checked before dispatch',
    'Carefully hand-packed',
    'Magnetic rigid box packaging',
    'Secure checkout via trusted marketplaces'
  ];

  return (
    <section className="border-t border-black/5 bg-[color:var(--surface)]/75">
      <div className="mx-auto w-full max-w-6xl px-5 py-8 md:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">Built With Care</h2>
        <ul className="mt-4 grid gap-3 text-sm md:grid-cols-2">
          {points.map((point) => (
            <li key={point} className="rounded-xl border border-black/5 px-4 py-3 text-[color:var(--muted)]">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
