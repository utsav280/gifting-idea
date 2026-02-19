const points = [
  'Buyer protection and customer-first policies',
  'Secure payments from trusted checkout systems',
  'Faster delivery through optimized logistics',
  'Higher customer confidence at purchase time'
];

export default function TrustPlatforms() {
  return (
    <section className="rounded-3xl border border-black/5 bg-[color:var(--surface)] p-7 md:p-10">
      <h2 className="text-2xl font-semibold md:text-3xl">Why we sell on trusted platforms</h2>
      <p className="mt-3 max-w-3xl text-[color:var(--muted)]">
        We intentionally partner with Amazon and Meesho so your purchase journey feels safe, fast, and reliable from
        checkout to delivery.
      </p>
      <ul className="mt-5 grid gap-3 text-sm text-[color:var(--muted)] md:grid-cols-2">
        {points.map((point) => (
          <li key={point} className="rounded-xl border border-black/5 px-4 py-3">
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
